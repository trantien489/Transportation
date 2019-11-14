using Microsoft.EntityFrameworkCore;
using OA.Core.Repoes.Generic;
using OA.Infrastructure.EF.Base;
using OA.Infrastructure.EF.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace OA.Repo.Generic
{
	public abstract class RepositoryGeneric<T> : IRepositoryGeneric<T> where T : EntityBase
	{
		private readonly AppDbContext _dbContext;
		private DbSet<T> _entities;
		string errorMessage = string.Empty;

		public RepositoryGeneric(AppDbContext dbContext)
		{
			_dbContext = dbContext ?? throw new ArgumentNullException("context");
			_entities = dbContext.Set<T>();
		}

		/// <summary>
		/// Get all data
		/// </summary>
		/// <returns></returns>
		public IEnumerable<T> GetAll()
		{
			IEnumerable<T> data;
			data = _entities.AsEnumerable();
			return data;
		}

		/// <summary>
		/// Get entity by id
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public T GetById(long id)
		{
			T data;
			data = _entities.Find(id);
			return data;
		}

		/// <summary>
		/// Insert new data
		/// </summary>
		/// <param name="entity"></param>
		/// <returns></returns>
		public async Task<T> Insert(T entity)
		{
			if (entity != null)
			{
				entity.CreatedDate = DateTime.Now;
				entity.UpdatedDate = DateTime.Now;
				_entities.Add(entity);
				await SaveChanges();
			}
			return entity;
		}

		/// <summary>
		/// Update data
		/// </summary>
		/// <param name="entity"></param>
		/// <returns></returns>
		public async Task<bool> Update(T entity)
		{
			var result = false;
			if (entity != null)
			{
				T data = GetById(entity.Id);
				if (data != null)
				{
					try
					{
						entity.UpdatedDate = DateTime.Now;
						_dbContext.Entry(data).CurrentValues.SetValues(entity);
						await SaveChanges();
						result = true;
					}
					catch (Exception)
					{
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Delete data
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		public async Task<bool> Delete(long id)
		{
			var result = false;
			T data = GetById(id);
			if (data != null)
			{
				try
				{
					_entities.Remove(data);
					await SaveChanges();
					result = true;
				}
				catch (Exception)
				{
				}
			}
			return result;
		}

		/// <summary>
		/// Apply change into DB
		/// </summary>
		/// <returns></returns>
		public async Task SaveChanges()
		{
			await _dbContext.SaveChangesAsync();
		}

		public IEnumerable<T> Find(Expression<Func<T, bool>> where)
		{
			return _entities.Where(where).AsEnumerable();
		}
	}
}
