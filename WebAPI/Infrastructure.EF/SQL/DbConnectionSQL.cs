using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.EF.SQL
{
    public class DbConnectionSQL
    {
        private static DbConnectionSQL _instance;
        private string _connectionString { get; set; }

        private DbConnectionSQL(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        public static DbConnectionSQL Instance(IConfiguration configuration = null)
        {

            //if (_instance == null)
            //{
            //    _instance = new DbConnectionSQL(configuration);
            //}
            //return _instance;
            return _instance ?? (_instance = new DbConnectionSQL(configuration));
        }
        public SqlConnection GetConnection()
        {
            SqlConnection connection = new SqlConnection(_connectionString);
            if (connection.State != ConnectionState.Open)
                connection.Open();
            return connection;
        }
        public SqlCommand GetCommand(DbConnection connection, string commandText, CommandType commandType)
        {
            SqlCommand command = new SqlCommand(commandText, connection as SqlConnection);
            command.CommandType = commandType;
            return command;
        }
        public SqlParameter GetParameter(string parameter, object value)
        {
            SqlParameter parameterObject = new SqlParameter(parameter, value != null ? value : DBNull.Value);
            parameterObject.Direction = ParameterDirection.Input;
            return parameterObject;
        }
        public SqlParameter GetParameterOut(string parameter, SqlDbType type, object value = null, ParameterDirection parameterDirection = ParameterDirection.InputOutput)
        {
            SqlParameter parameterObject = new SqlParameter(parameter, type);
            if (type == SqlDbType.NVarChar || type == SqlDbType.VarChar || type == SqlDbType.NText || type == SqlDbType.Text)
            {
                parameterObject.Size = -1;
            }
            parameterObject.Direction = parameterDirection;
            if (value != null)
            {
                parameterObject.Value = value;
            }
            else
            {
                parameterObject.Value = DBNull.Value;
            }
            return parameterObject;
        }
        public int ExecuteNonQuery(string procedureName, List<DbParameter> parameters, CommandType commandType = CommandType.StoredProcedure)
        {
            int returnValue = -1;
            using (SqlConnection connection = GetConnection())
            {
                try
                {
                    SqlCommand cmd = GetCommand(connection, procedureName, commandType);
                    if (parameters != null && parameters.Count > 0)
                    {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    returnValue = cmd.ExecuteNonQuery();
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException(ex.Message);
                }
                finally
                {
                    if (connection.State != ConnectionState.Closed)
                    {
                        connection.Close();
                    }
                }
            }
            return returnValue;
        }
        public IDataReader ExecuteReader(string procedureName, List<DbParameter> parameters, CommandType commandType = CommandType.StoredProcedure)
        {
            DataTable dt = new DataTable();
            using (SqlConnection connection = GetConnection())
            {
                try
                {
                    SqlCommand cmd = GetCommand(connection, procedureName, commandType);
                    if (parameters != null && parameters.Count > 0)
                    {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    SqlDataReader sqlDr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                    dt.Load(sqlDr);
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException(ex.Message);
                }
                finally
                {
                    if (connection.State != ConnectionState.Closed)
                    {
                        connection.Close();
                    }
                }
            }
            return dt.CreateDataReader();
        }
        public DataTable ExecuteTable(string procedureName, List<DbParameter> parameters, CommandType commandType = CommandType.StoredProcedure)
        {
            DataTable dt = new DataTable();
            using (SqlConnection connection = GetConnection())
            {
                try
                {
                    DataSet ds = new DataSet();
                    SqlCommand cmd = GetCommand(connection, procedureName, commandType);
                    if (parameters != null && parameters.Count > 0)
                    {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    var sqlDa = new SqlDataAdapter(cmd);
                    sqlDa.Fill(ds);
                    dt = ds.Tables[0];
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException(ex.Message);
                }
                finally
                {
                    if (connection.State != ConnectionState.Closed)
                    {
                        connection.Close();
                    }
                }
            }
            return dt;
        }
        public DataSet ExecuteDataSet(string procedureName, List<DbParameter> parameters, CommandType commandType = CommandType.StoredProcedure)
        {
            DataSet ds = new DataSet();
            using (SqlConnection connection = GetConnection())
            {
                try
                {
                    SqlCommand cmd = GetCommand(connection, procedureName, commandType);
                    if (parameters != null && parameters.Count > 0)
                    {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    var sqlDa = new SqlDataAdapter(cmd);
                    sqlDa.Fill(ds);
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException(ex.Message);
                }
                finally
                {
                    if (connection.State != ConnectionState.Closed)
                    {
                        connection.Close();
                    }
                }
            }
            return ds;
        }
        public List<Dictionary<string, object>> ConvertToListDictionary(DataTable dataTable)
        {
            var columns = new List<string>();
            var rows = new List<Dictionary<string, object>>();
            for (var i = 0; i < dataTable.Columns.Count; i++)
            {
                columns.Add(dataTable.Columns[i].ColumnName);
            }
            for (var i = 0; i < dataTable.Rows.Count; i++)
            {
                rows.Add(
                    columns.ToDictionary(
                        column => column,
                        column => (dataTable.Rows[i][column] != null && dataTable.Rows[i][column].ToString() != "") ? dataTable.Rows[i][column] : null)
                    );
            }
            return rows;
        }
        public string ExecuteScalar(string sqlQuery)
        {
            string result = string.Empty;
            using (SqlConnection connection = GetConnection())
            {
                SqlCommand cmd = GetCommand(connection, sqlQuery, CommandType.Text);
                var resultExec = cmd.ExecuteScalar();
                if (resultExec != null)
                {
                    result = resultExec.ToString();
                }
            }
            return result;
        }

        public DataTable ExecuteRawSql(string sqlQuery)
        {
            DataTable dt = new DataTable();
            using (SqlConnection connection = GetConnection())
            {
                try
                {
                    DataSet ds = new DataSet();
                    SqlCommand cmd = GetCommand(connection, sqlQuery, CommandType.Text);
                   
                    var sqlDa = new SqlDataAdapter(cmd);
                    sqlDa.Fill(ds);
                    dt = ds.Tables[0];
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException(ex.Message);
                }
                finally
                {
                    if (connection.State != ConnectionState.Closed)
                    {
                        connection.Close();
                    }
                }
            }
            return dt;
        }

        public List<T> ConvertDataTableToList<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }
        private T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (pro.Name == column.ColumnName)
                    {
                        if (pro.PropertyType == typeof(string) && dr[column.ColumnName] == DBNull.Value)
                        {
                            pro.SetValue(obj, null, null);
                        }
                        else
                        {
                            pro.SetValue(obj, dr[column.ColumnName], null);
                        }
                    }
                    else
                        continue;
                }
            }
            return obj;
        }
    }
}
