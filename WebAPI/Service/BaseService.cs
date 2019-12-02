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
        public virtual async Task<ResponseResult> GetAll(int pageSize, int pageNumber, int? Status)
        {
            var result = new ResponseResult();
            var data = new Pagination();
            if (Status.HasValue)
            {
                data = await _repository.GetAllPagination(pageNumber, pageSize, x => x.Status == Status.Value);
            }
            else
            {
                data = await _repository.GetAllPagination(pageNumber, pageSize, x => x.Status != CommonConstants.Status.Deleted);
            }

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
            var repoResult = new ResponseResult();
            var entityCreated = _mapper.Map<TCreateViewModel, TEntity>(model);
            var beforeInsert = BeforeInsert(entityCreated);
            if (string.IsNullOrEmpty(beforeInsert))
            {
                repoResult = await _repository.Insert(entityCreated);
                repoResult.Data = _mapper.Map<TEntity, TGetByIdViewModel>(repoResult.Data);
            }
            else
            {
                repoResult.Message = beforeInsert;
                repoResult.Success = false;
            }
            return repoResult;
        }
        public virtual async Task<ResponseResult> Update(TUpdateViewModel model)
        {
            var repoResult = new ResponseResult();
            var entity = await _repository.GetById(((dynamic)model).Id);

            entity = _mapper.Map(model, entity);
            var beforeUpdate = BeforeUpdate(entity);
            if (string.IsNullOrEmpty(beforeUpdate))
            {
                repoResult = await _repository.Update(entity);
                repoResult.Data = _mapper.Map<TEntity, TGetByIdViewModel>(repoResult.Data);
            }
            else
            {
                repoResult.Message = beforeUpdate;
                repoResult.Success = false;
            }

            return repoResult;
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
        public virtual string BeforeInsert(TEntity entity)
        {
            return string.Empty;
        }

        public virtual string BeforeUpdate(TEntity entity)
        {
            return string.Empty;
        }
    }
}
