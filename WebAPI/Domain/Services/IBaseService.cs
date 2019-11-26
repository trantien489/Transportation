using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;
using Infrastructure.EF.Entities;

namespace Domain.Services
{
    public interface IBaseService<TEntity, TCreateViewModel, TUpdateViewModel, TGetByIdViewModel, TGetAllViewModel> where TEntity : BaseEntity
    {
        Task<ResponseResult> GetAll(int pageSize, int pageNumber, int? Status);
        Task<ResponseResult> GetById(long id);
        Task<ResponseResult> Create(TCreateViewModel model);
        Task<ResponseResult> Update(TUpdateViewModel model);
        Task<ResponseResult> Delete(long id);//Delete only change status to value = 2
        Task<ResponseResult> ChangeStatus(long id);
        Task<ResponseResult> Remove(long id);//Remove data 
    }
}
