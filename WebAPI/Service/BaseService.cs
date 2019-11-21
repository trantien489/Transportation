using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain.Constants;
using Domain.Models;
using Domain.Repositories.Generic;
using Domain.Resources;
using Infrastructure.EF.Entities;

namespace Service
{
    public class BaseService<TEntity, TCreateViewModel, TUpdateViewModel, TGetByIdViewModel, TGetAllViewModel>
       where TEntity : BaseEntity
       where TGetByIdViewModel : class
    {
        private readonly IGenericRepository<TEntity> _repository;
        private readonly IMapper _mapper;
        public BaseService(IGenericRepository<TEntity> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public virtual async Task<ResponseResult> GetAll(int pageSize, int pageNumber)
        {
            var result = new ResponseResult();
            var data = await _repository.GetAllPagination(pageNumber, pageSize, x => x.Status != CommonConstants.Status.Deleted, x => x.Id);
            foreach (var entity in data.Records)
            {
                GetAllEntry(entity);
            }
            data.Records = data.Records.Select(r => _mapper.Map<TEntity, TGetAllViewModel>(r));
            result.Data = data;
            result.Success = true;
            return result;
        }
        public virtual async Task<ResponseResult> GetById(long id)
        {
            var result = new ResponseResult();
            var entity = await _repository.GetById(id);
            if (entity != null && entity.Status != CommonConstants.Status.Deleted)
            {
                GetByIdEntry(entity);
                result.Data = _mapper.Map<TEntity, TGetByIdViewModel>(entity);
                result.Success = true;
            }
            else
            {
                result.Success = false;
                result.Message = Resource.NotFoundData;
            };
            return result;
        }
        public virtual async Task<ResponseResult> Create(TCreateViewModel model)
        {
            var entityCreated = _mapper.Map<TCreateViewModel, TEntity>(model);
            var repoResult = await _repository.Insert(entityCreated);
            repoResult.Data = _mapper.Map<TEntity, TGetByIdViewModel>(repoResult.Data);
            return repoResult;
        }
        public virtual async Task<ResponseResult> Update(TUpdateViewModel model)
        {
            var entity = await _repository.GetById(((dynamic)model).Id);
            entity = _mapper.Map(model, entity);
            return await _repository.Update(entity);
        }
        public async Task<ResponseResult> ChangeStatus(long id)
        {
            var result = new ResponseResult();
            var items = await _repository.GetById(id);
            if (items != null && items.Status != CommonConstants.Status.Deleted)
            {
                items.Status = items.Status == CommonConstants.Status.Active ?
                    CommonConstants.Status.InActive : CommonConstants.Status.Active;
                result = await _repository.Update(items);
            }
            return result;
        }
        public async Task<ResponseResult> Delete(long id)
        {
            TEntity items = await _repository.GetById(id);
            if (items != null)
            {
                items.Status = CommonConstants.Status.Deleted;
            }
            return await _repository.Update(items);
        }
        public virtual async Task<ResponseResult> Remove(long id)
        {
            var result = new ResponseResult();
            TEntity entity = await _repository.GetById(id);
            if (entity != null)
            {
                result = await _repository.Remove(entity.Id);
            }
            return result;
        }
        public virtual void GetAllEntry(TEntity entity)
        {
            // override this function in child class if needed
        }
        public virtual void GetByIdEntry(TEntity entity)
        {
            // override this function in child class if needed
        }
    }
}
