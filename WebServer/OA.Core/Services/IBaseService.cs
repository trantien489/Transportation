using OA.Core.Models;
using OA.Infrastructure.EF.Entities;
using System;
using System.Threading.Tasks;
namespace OA.Core.Services
{
    public interface IBaseService<TEntity, TCreateViewModel, TUpdateViewModel, TGetByIdViewModel, TGetAllViewModel> where TEntity : BaseEntity
    {
        Task<ResponseResult> GetAll(int pageSize, int pageNumber);
        Task<ResponseResult> GetById(long id);
        Task<ResponseResult> Create(TCreateViewModel model);
        Task<ResponseResult> Update(TUpdateViewModel model);
        Task<ResponseResult> Delete(long id);//Delete only change status to value = 2
        Task<ResponseResult> ChangeStatus(long id);
        Task<ResponseResult> Remove(long id);//Remove data 
    }
}
