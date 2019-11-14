using OA.Infrastructure.SQL.Common;

namespace OA.Service.Helpers
{
    public static class VariableReplacement
    {
        private static DbConnectionSQL _dbConnectSQL = DbConnectionSQL.Instance();
        public static string ReplacementAndExecuteSQL(string contentMail, string primaryKey, char charSpecialOpen = '{', char charSpecialClose = '}')
        {
            int posCharSpecialOpen = contentMail.IndexOf(charSpecialOpen);
            int posCharSpecialClose = contentMail.IndexOf(charSpecialClose);
            while (posCharSpecialOpen >= 0 && posCharSpecialOpen >= 0)
            {
                var querySQL = contentMail.Substring(posCharSpecialOpen + 1, posCharSpecialClose - posCharSpecialOpen - 1);
                if (!string.IsNullOrEmpty(querySQL))
                {
                    var resultExecuteSQL = _dbConnectSQL.ExecuteScalar(querySQL.Replace("[]", "'" + primaryKey + "'"));
                    contentMail = contentMail.Replace(charSpecialOpen + querySQL + charSpecialClose, resultExecuteSQL);
                }
                else
                {
                    contentMail = contentMail.Replace(charSpecialOpen + querySQL + charSpecialClose, string.Empty);
                }
                //
                posCharSpecialOpen = contentMail.IndexOf(charSpecialOpen);
                posCharSpecialClose = contentMail.IndexOf(charSpecialClose);
            }
            return contentMail;
        }
    }
}
