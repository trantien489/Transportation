using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model.Context;
using Model.Entity;
using SampleAPIs.BindingModels.Account;
using SampleAPIs.Helpers;

namespace SampleAPIs.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Produces("application/json")]
    [Route("api/Customers")]
    public class CustomerController : Controller
    {
        private readonly ApplicationDbContext _appDbContext;
        private readonly ClaimsPrincipal _caller;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;


        public CustomerController(UserManager<AppUser> userManager, ApplicationDbContext appDbContext,
             IMapper mapper,
            IHttpContextAccessor httpContextAccessor)
        {

            _caller = httpContextAccessor.HttpContext.User;
            _appDbContext = appDbContext;
            _userManager = userManager;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            var result = _appDbContext.Customers.Include(c => c.AppUser).Select(c => new
            {
                FirstName = c.AppUser.FirstName,
                LastName = c.AppUser.LastName,
                Email = c.AppUser.Email,
                UserName = c.AppUser.UserName,
                CustomerId = c.Id,
            });

            return Ok(new { data = result });
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<AppUser>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            await _appDbContext.Customers.AddAsync(new Customer { AppUserId = userIdentity.Id, Location = model.Location });
            await _appDbContext.SaveChangesAsync();

            await _userManager.AddToRoleAsync(await _userManager.FindByNameAsync(model.Username), "Customer");

            return new OkObjectResult("Account created");
        }
    }
}