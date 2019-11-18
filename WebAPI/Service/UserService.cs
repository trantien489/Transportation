using AutoMapper;
using Domain.Constants;
using Domain.Models;
using Domain.Resources;
using Domain.Services;
using Domain.ViewModels;
using Infrastructure.EF.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class UserService : IUserService
    {
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IMapper _mapper;
        private const string _roleDefault = CommonConstants.Authorize.Staff;
        private static string _nameService = "user";


        public UserService(RoleManager<ApplicationRole> roleManager, UserManager<ApplicationUser> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
        }

        public async Task<ResponseResult> Create(UserCreateViewModel model)
        {
            var servResult = new ResponseResult();
            var isValidUserName = await CheckValidUserName(model.UserName);
            if (isValidUserName.Success)
            {
                var entity = _mapper.Map<UserCreateViewModel, ApplicationUser>(model);
                entity.CreatedDate = DateTime.UtcNow;
                //entity.CreatedBy = GlobalUserName;
                entity.CreatedBy = "Tien Tran";
                entity.Status = CommonConstants.Status.Active;
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
                                //var sendMail = await SendMail(user.Email, user.Id);
                                //servResult.Data = sendMail.Message;
                                //await _authMessageSender.SendSmsAsync(user.PhoneNumber, "SMS is sent from CMS OnlineShop");
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
