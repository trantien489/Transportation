using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Domain.Constants;
using Domain.Models;
using Domain.Repositories.Generic;
using Infrastructure.EF.Context;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Extensions.Internal;
using Microsoft.Extensions.Logging;

namespace Repository.Generic
{
    public class GenericRepository<T> : GlobalVariables, IGenericRepository<T> where T : BaseEntity
    {
        private readonly ApplicationDbContext _dbContext;
        private DbSet<T> _entities;
        private readonly ILogger _logger;
        public GenericRepository(ApplicationDbContext dbContext, ILogger<GenericRepository<T>> logger, IHttpContextAccessor contextAccessor) : base(contextAccessor)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException("context");
            _entities = dbContext.Set<T>();
            _logger = logger;
        }
        /// <summary>
        /// Get all data by pagination
        /// </summary>
        /// <param name="pageNumber"></param>
        /// <param name="pageSize"></param>
        /// <param name="where"></param>
        /// <param name="orderDesc"></param>
        /// <param name="orderAsc"></param>
        /// <returns></returns>
        public async Task<Pagination> GetAllPagination(int pageNumber, int pageSize, Expression<Func<T, bool>> where = null,
            Expression<Func<T, dynamic>> orderBy = null, Expression < Func<T, dynamic>> orderDesc = null )
        {
            IQueryable<T> query = _entities;
            if (where != null)
            {
                query = query.Where(where);
            }
            if (orderBy != null)
            {
                query = query.OrderBy(orderBy);
            }
            if (orderDesc != null)
            {
                query = query.OrderByDescending(orderDesc);
            }
            var data = await Task.FromResult(query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToAsyncEnumerable());
            return new Pagination
            {
                Records = data.ToEnumerable(),
                TotalRecords = query.Count()
            };
        }
        /// <summary>
        /// Get entity by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<T> GetById(long id)
        {
            var entity = await _entities.FindAsync(id);
            return entity;
        }
        /// <summary>
        /// Insert new record to table into database.
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public async Task<ResponseResult> Insert(T entity)
        {
            var result = new ResponseResult();
            if (entity != null)
            {
                entity.CreatedDate = DateTime.UtcNow;
                entity.CreatedBy = GlobalUserName;
                entity.Status = CommonConstants.Status.Active;
                _entities.Add(entity);
                result.Data = await SaveChanges(result) ? entity : null;
            }
            return result;
        }
        /// <summary>
        /// Update entity to database.
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public async Task<ResponseResult> Update(T entity)
        {
            var result = new ResponseResult();
            if (entity != null)
            {
                T data = await GetById(entity.Id);
                if (data != null)
                {
                    entity.UpdatedDate = DateTime.UtcNow;
                    entity.UpdatedBy = GlobalUserName;
                    _dbContext.Entry(data).CurrentValues.SetValues(entity);
                    _dbContext.Entry(data).Property(e => e.CreatedDate).IsModified = false;
                    _dbContext.Entry(data).Property(e => e.CreatedBy).IsModified = false;
                    result.Data = await SaveChanges(result) ? entity : null;
                }
            }
            return result;
        }
        /// <summary>
        /// It will be removed from database.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ResponseResult> Remove(long id)
        {
            var result = new ResponseResult();
            T entity = await GetById(id);
            if (entity != null)
            {
                _entities.Remove(entity);
                await SaveChanges(result);
            }
            return result;
        }
        /// <summary>
        /// Entities will be removed from the database
        /// </summary>
        /// <param name="entities"></param>
        /// <returns></returns>
        public async Task<ResponseResult> RemoveAll(IEnumerable<T> entities)
        {
            var result = new ResponseResult();
            _entities.RemoveRange(entities);
            await SaveChanges(result);
            return result;
        }
        /// <summary>
        /// Build as queryable
        /// </summary>
        /// <returns>IQueryable of entity</returns>
        public IQueryable<T> AsQueryable()
        {
            var query = _entities.AsQueryable();
            return query;
        }
        /// <summary>
        /// Where
        /// </summary>
        /// <param name="where"></param>
        /// <returns>IEnumerable of entity</returns>
        public async Task<IQueryable<T>> Where(Expression<Func<T, bool>> where)
        {
            return await Task.FromResult(_entities.Where(where));
        }
        /// <summary>
        /// Reference data from its parent entities
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="entityReference"></param>
        public void EntryReference(T entity, Expression<Func<T, dynamic>> entityReference)
        {
            _dbContext.Entry(entity).Reference(entityReference).Load();
        }
        /// <summary>
        /// Collect data from its child entities
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="entityCollection"></param>
        public void EntryCollection(T entity, Expression<Func<T, IEnumerable<dynamic>>> entityCollection)
        {
            _dbContext.Entry(entity).Collection(entityCollection).Load();
        }
        /// <summary>
        /// Save all changes to database. If an error occurs, the system will return a specific error 
        /// </summary>
        /// <param name="result"></param>
        /// <returns></returns>
        public async Task<bool> SaveChanges(ResponseResult result)
        {
            try
            {
                result.Success = await _dbContext.SaveChangesAsync() >= 0;
            }
            catch (Exception ex)
            {
                var message = Utilities.MakeExceptionMessage(ex);
                _logger.LogError(message);
                result.ErrorNumber = (int)Enums.Common.Exception;
                result.Message = message;
                result.Success = false;
            }
            return result.Success;
        }

        public async Task<T> FirstOrDefault(Expression<Func<T, bool>> where)
        {
            return await _entities.FirstOrDefaultAsync(where);
        }
    }
}
