using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OA.Core.Constants;
using OA.Core.Factories;
using OA.Core.Models;
using OA.Core.Repositories.Generic;
using OA.Core.Resources;
using OA.Core.Services;
using OA.Core.ViewModels;
using OA.Core.ViewModels.Role;
using OA.Infrastructure.EF.Entities;
using OA.Repository.Generic;
using OA.Service.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace OA.Service
{
    public class UserService : GlobalVariables, IUserService
    {
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly IAuthMessageSender _authMessageSender;
        private readonly IMapper _mapper;
        private static string _nameService = "user";
        private IHttpContextAccessor _contextAccessor;
        private const string _roleDefault = CommonConstants.Authorize.Member;
        public UserService(RoleManager<ApplicationRole> roleManager, UserManager<ApplicationUser> userManager,
             IJwtFactory jwtFactory, IAuthMessageSender authMessageSender, IHttpContextAccessor contextAccessor,
            IMapper mapper) : base(contextAccessor)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _jwtFactory = jwtFactory;
            _authMessageSender = authMessageSender;
            _mapper = mapper;
            _contextAccessor = contextAccessor;
        }
        #region --USERS BASIC--
        public ResponseResult GetAll(int pageNumber, int pageSize)
        {
            var result = new ResponseResult();
            var query = _userManager.Users
                        .Where(x => x.Status != CommonConstants.Status.Deleted).OrderByDescending(x => x.CreatedDate);
            var data = new Pagination
            {
                Records = query.Skip((pageNumber - 1) * pageSize).Take(pageSize),
                TotalRecords = query.Count()
            };
            data.Records = data.Records.Select(r => _mapper.Map<ApplicationUser, UserGetAllViewModel>(r));
            result.Data = data;
            result.Success = true;
            return result;
        }
        public async Task<ResponseResult> GetById(string id)
        {
            var result = new ResponseResult();

            var entity = await _userManager.Users
                         .Where(x => x.Status != CommonConstants.Status.Deleted && x.Id == id)
                         .FirstOrDefaultAsync();
            if (entity != null)
            {
                result.Data = _mapper.Map<ApplicationUser, UserGetByIdViewModel>(entity);
                result.Success = true;
                var roles = await _userManager.GetRolesAsync(entity);
                if (roles.Any())
                {
                    result.Data.Roles = new List<string>();
                    foreach (var item in roles)
                    {
                        result.Data.Roles.Add(item);
                    }
                }
            }
            return result;
        }
        public async Task<ResponseResult> Create(UserCreateViewModel model)
        {
            var servResult = new ResponseResult();
            var isValidUserName = await CheckValidUserName(model.UserName);
            if (isValidUserName.Success)
            {
                var entity = _mapper.Map<UserCreateViewModel, ApplicationUser>(model);
                entity.CreatedDate = DateTime.UtcNow;
                entity.CreatedBy = GlobalUserName;
                entity.Status = CommonConstants.Status.InActive;
                try
                {
                    var identityResult = await _userManager.CreateAsync(entity, model.Password);
                    if (identityResult.Succeeded)
                    {
                        var user = await _userManager.FindByNameAsync(model.UserName);
                        if (user != null)
                        {
                            List<string> roles = new List<string>();
                            roles.Add(_roleDefault);
                            var addRole = await AddToRole(user, roles);
                            if (addRole != null)
                            {
                                servResult.Success = true;
                                servResult.Message = Resource.CreateUserSuccessAndAssignRoleSuccess;
                                servResult.Data = true;
                                await _authMessageSender.SendSmsAsync(user.PhoneNumber, "SMS is sent from CMS OnlineShop");
                            }
                            else
                            {
                                servResult.Success = true;
                                servResult.Message = Resource.CreateUserSuccessAndAssignRoleFail;
                            }
                        }
                        else
                        {
                            servResult.Success = false;
                            servResult.Message = string.Format(Resource.ErrorCreate, _nameService);
                        }
                    }
                    else
                    {
                        servResult.Success = false;
                        servResult.Data = identityResult.Errors;
                        servResult.Message = string.Format(Resource.ErrorCreate, _nameService);
                    }
                }
                catch (Exception ex)
                {
                    var message = Utilities.MakeExceptionMessage(ex);
                    servResult.ErrorNumber = (int)Enums.Common.Exception;
                    servResult.Message = message;
                    servResult.Success = false;
                }
            }
            else
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.FieldIsExisted, "UserName");
            }
            return servResult;
        }
        public async Task<ResponseResult> Update(UserUpdateViewModel model)
        {
            var servResult = new ResponseResult();
            var entity = await _userManager.FindByIdAsync(model.Id);
            if (entity != null)
            {
                entity = _mapper.Map(model, entity);
                entity.UpdatedDate = DateTime.UtcNow;
                entity.UpdatedBy = GlobalUserName;
                var identityResult = await _userManager.UpdateAsync(entity);
                if (identityResult.Succeeded)
                {
                    servResult.Success = true;
                    servResult.Message = string.Format(Resource.SuccessUpdate, _nameService);
                }
                else
                {
                    servResult.Success = false;
                    servResult.Data = identityResult.Errors;
                    servResult.Message = string.Format(Resource.ErrorUpdate, _nameService);
                }
            }
            else
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.NotFoundId, _nameService);
            }
            return servResult;
        }
        public async Task<ResponseResult> ChangeStatus(string id)
        {
            var servResult = new ResponseResult();
            var entity = await _userManager.FindByIdAsync(id);
            if (entity != null && entity.Status != CommonConstants.Status.Deleted)
            {
                entity.UpdatedDate = DateTime.UtcNow;
                entity.UpdatedBy = GlobalUserName;
                entity.Status = entity.Status == CommonConstants.Status.InActive ? CommonConstants.Status.Active : CommonConstants.Status.InActive;
                var identityResult = await _userManager.UpdateAsync(entity);
                if (identityResult.Succeeded)
                {
                    servResult.Success = true;
                    servResult.Message = string.Format(Resource.SuccessChangeStatus, _nameService);
                }
                else
                {
                    servResult.Success = false;
                    servResult.Data = identityResult.Errors;
                    servResult.Message = string.Format(Resource.ErrorChangeStatus, _nameService);
                }
            }
            else if (entity != null && entity.Status == CommonConstants.Status.Deleted)
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.ObjectIsDeleted, _nameService);
            }
            else
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.NotFoundId, _nameService);
            }
            return servResult;
        }
        public async Task<ResponseResult> Delete(string id)
        {
            var servResult = new ResponseResult();
            var entity = await _userManager.FindByIdAsync(id);
            if (entity != null && entity.Status != CommonConstants.Status.Deleted)
            {
                entity.UpdatedDate = DateTime.UtcNow;
                entity.UpdatedBy = GlobalUserName;
                entity.Status = CommonConstants.Status.Deleted;
                var identityResult = await _userManager.UpdateAsync(entity);
                if (identityResult.Succeeded)
                {
                    servResult.Success = true;
                    servResult.Message = string.Format(Resource.SuccessDelete, _nameService);
                }
                else
                {
                    servResult.Success = false;
                    servResult.Data = identityResult.Errors;
                    servResult.Message = string.Format(Resource.ErrorDelete, _nameService);
                }
            }
            else if (entity != null && entity.Status == CommonConstants.Status.Deleted)
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.ObjectIsDeleted, _nameService);
            }
            else
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.NotFoundId, _nameService);
            }
            return servResult;
        }
        public async Task<ResponseResult> Remove(string id)
        {
            var servResult = new ResponseResult();
            var entity = await _userManager.FindByIdAsync(id);
            if (entity != null)
            {
                //remove role
                var roles = await _userManager.GetRolesAsync(entity);
                if (roles.Any())
                {
                    await _userManager.RemoveFromRolesAsync(entity, roles);
                }
                //remove user
                var identityResult = await _userManager.DeleteAsync(entity);
                if (identityResult.Succeeded)
                {
                    servResult.Success = true;
                    servResult.Message = string.Format(Resource.SuccessRemove, _nameService);
                }
                else
                {
                    servResult.Success = false;
                    servResult.Data = identityResult.Errors;
                    servResult.Message = string.Format(Resource.ErrorRemove, _nameService);
                }
            }
            else
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.NotFoundId, _nameService);
            }
            return servResult;
        }
        #endregion --END USERS BASIC--
        #region --USERS ADVANCE--
        public async Task<ResponseResult> UpdateRoleForUser(UpdateRoleModel model)
        {
            var servResult = new ResponseResult();
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user != null)
            {
                if (model.AssignRoles != null && model.AssignRoles.Count() > 0)
                {
                    var currentRoles = await _userManager.GetRolesAsync(user);
                    var identityResult = await AddToRole(user, model.AssignRoles, currentRoles);
                    if (identityResult.Succeeded)
                    {
                        servResult.Success = true;
                        servResult.Message = string.Format(Resource.SuccessAssignRole, user.UserName);
                    }
                    else
                    {
                        servResult.Success = false;
                        servResult.Message = string.Format(Resource.ErrorAssignRole, user.UserName);
                    }
                }
                else
                {
                    servResult.Success = false;
                    servResult.Message = string.Format(Resource.UserMustHaveRole, user.UserName);
                }
            }
            else
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.NotFoundId, _nameService);
            }
            return servResult;
        }
        public async Task<ResponseResult> CheckValidUserName(string userName)
        {
            var servResult = new ResponseResult();
            var entity = await _userManager.FindByNameAsync(userName);
            if (entity == null)
            {
                servResult.Success = true;
                servResult.Message = string.Format(Resource.SuccessCheckValidUserName, _nameService);
            }
            else
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.ErrorCheckValidUserName, _nameService); ;
            }
            return servResult;
        }
        public async Task<ResponseResult> CheckValidEmail(string email)
        {
            var servResult = new ResponseResult();
            var entity = await _userManager.FindByEmailAsync(email);
            if (entity == null)
            {
                servResult.Success = true;
                servResult.Message = string.Format(Resource.FieldIsValid, "Email");
            }
            else
            {
                servResult.Success = false;
                servResult.Message = string.Format(Resource.FieldIsInvalid, "Email"); ;
            }
            return servResult;
        }
        public ResponseResult Search(int pageNumber, int pageSize, string firstNameOrLastName)
        {
            var result = new ResponseResult();
            var query = _userManager.Users
                        .Where(x => x.Status != CommonConstants.Status.Deleted
                        && (x.FirstName.Contains(firstNameOrLastName) || x.LastName.Contains(firstNameOrLastName))
                        ).OrderBy(x => x.LastName);
            var data = new Pagination
            {
                Records = query.Skip((pageNumber - 1) * pageSize).Take(pageSize),
                TotalRecords = query.Count()
            };
            data.Records = data.Records.Select(r => _mapper.Map<ApplicationUser, UserGetAllViewModel>(r));
            result.Data = data;
            result.Success = true;
            return result;
        }
        public string VariableReplacementBodyOfMail(List<ConfigGetAllViewModel> parameters, string contentMail, string userId)
        {
            var sendMail = new SendMailModel();
            //Replace variable once
            foreach (var item in parameters)
            {
                if (item.Key == nameof(sendMail.SendMailParametersDomainApi))
                {
                    var codeActive = Utilities.RandomString(30);
                    _contextAccessor.HttpContext.Session.SetString(userId, codeActive);
                    item.Value = item.Value + userId + "&Code=" + codeActive;
                }
                contentMail = contentMail.Replace("{" + item.Key + "}", item.Value);
            }
            ////Replace variable twice
            //char charSpecialOpen = '{';
            //char charSpecialClose = '}';
            //int posCharSpecialOpen = contentMail.IndexOf(charSpecialOpen);
            //int posCharSpecialClose = contentMail.IndexOf(charSpecialClose);
            //while (posCharSpecialOpen >= 0 && posCharSpecialOpen >= 0)
            //{
            //    var sqlQuery = contentMail.Substring(posCharSpecialOpen + 1, posCharSpecialClose - posCharSpecialOpen - 1);
            //    //Replace variable third
            //    if (!string.IsNullOrEmpty(sqlQuery))
            //    {
            //        var sqlQueryTmp = sqlQuery;
            //        sqlQuery = sqlQuery.Replace("[]", "'" + userId + "'");
            //        var resultExecuteSQL = _genericSqlQuery.ExecuteScalar(sqlQuery);
            //        contentMail = contentMail.Replace("{" + sqlQueryTmp + "}", resultExecuteSQL);
            //    }
            //    //
            //    posCharSpecialOpen = contentMail.IndexOf(charSpecialOpen);
            //    posCharSpecialClose = contentMail.IndexOf(charSpecialClose);
            //}
            return VariableReplacement.ReplacementAndExecuteSQL(contentMail, userId);
        }
  
        public ResponseResult ConfirmAccount(ConfirmAccount model)
        {
            var result = new ResponseResult()
            {
                Success = false
            };
            var codeActive = _contextAccessor.HttpContext.Session.GetString(model.UserId);
            if (codeActive != null && codeActive == model.Code)
            {
                var isConfirm = UpdateEmailConfirm(model.UserId);
                if (isConfirm)
                {
                    _contextAccessor.HttpContext.Session.SetString(model.UserId, string.Empty);
                }
                result.Success = true;
            }
            return result;
        }
        public bool UpdateEmailConfirm(string userId)
        {
            var result = false;
            var user = _userManager.FindByIdAsync(userId).Result;
            if (user != null)
            {
                user.EmailConfirmed = true;
                user.Status = CommonConstants.Status.Active;
                var identityResult = _userManager.UpdateAsync(user).Result;
                if (identityResult.Succeeded)
                {
                    result = identityResult.Succeeded;
                }
            }
            return result;
        }
        #endregion --END USERS ADVANCE--
        //COMMON FOR USERS
        private async Task<IdentityResult> AddToRole(ApplicationUser user, IEnumerable<string> assignRoles, IList<string> currentRoles = null)
        {
            var identityResult = new IdentityResult();
            if (currentRoles != null)
            {
                await _userManager.RemoveFromRolesAsync(user, currentRoles);
            }
            await _userManager.AddToRolesAsync(user, assignRoles);
            identityResult = await _userManager.UpdateAsync(user);
            return identityResult;
        }
    }
}
