using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Domain.Models;
using Infrastructure.EF.Entities;

namespace Domain.Repositories.Generic
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<Pagination> GetAllPagination(int pageNumber, int pageSize, Expression<Func<T, bool>> where = null,
            Expression<Func<T, dynamic>> orderBy = null, Expression < Func<T, dynamic>> orderDesc = null );
        Task<T> GetById(long id);
        Task<ResponseResult> Insert(T entity);
        Task<ResponseResult> Update(T entity);
        Task<ResponseResult> Remove(long id);
        Task<ResponseResult> RemoveAll(IEnumerable<T> entities);
        Task<bool> SaveChanges(ResponseResult result);
        IQueryable<T> AsQueryable();
        Task<IQueryable<T>> Where(Expression<Func<T, bool>> where);
        void EntryReference(T entity, Expression<Func<T, dynamic>> entityReference);
        void EntryCollection(T entity, Expression<Func<T, IEnumerable<dynamic>>> entityCollection);
        Task<T> FirstOrDefault(Expression<Func<T, bool>> where);
    }
}
