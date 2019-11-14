using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.IdentityModel.Tokens;
using OA.Core.Configurations;
using OA.Core.Constants;
using OA.Core.Factories;
using OA.Core.Repositories.Generic;
using OA.Core.Services;
using OA.Infrastructure.EF.Context;
using OA.Infrastructure.EF.Entities;
using OA.Infrastructure.SQL.Common;
using OA.Repo.Generic;
using OA.Repository.Generic;
using OA.Service;
using OA.Service.Factories;
using OA.Service.Helpers;
using OA.WebApi.Mappings;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
namespace WebApi
{
    public class Startup
    {
        private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
        private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin",
                    build => build
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory("AllowAnyOrigin"));
            });
            services.Configure<ConnectionStrings>(Configuration.GetSection(nameof(ConnectionStrings)));
            //services.AddTransient<IEmailSender, AuthMessageSender>();
            //services.AddTransient<ISmsSender, AuthMessageSender>();
            services.Configure<SMSoptions>(Configuration.GetSection(nameof(SMSoptions)));
            //Swagger define
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new Info
                {
                    Title = PlatformServices.Default.Application.ApplicationName,
                    Version = PlatformServices.Default.Application.ApplicationVersion
                });
                // Swagger 2.+ support Authorize
                var security = new Dictionary<string, IEnumerable<string>>
                {
                    {"Bearer", new string[] { }},
                };
                options.AddSecurityDefinition("Bearer", new ApiKeyScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = "header",
                    Type = "apiKey"
                });
                options.AddSecurityRequirement(security);
            });
            #region --- JWT ---
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly("OA.Infrastructure.EF")));
            services.AddSingleton<IJwtFactory, JwtFactory>();
            // Register the ConfigurationBuilder instance of FacebookAuthSettings
            services.Configure<FacebookAuthSettings>(Configuration.GetSection(nameof(FacebookAuthSettings)));
            services.Configure<UploadPathConfiguration>(Configuration.GetSection(nameof(UploadPathConfiguration)));
            services.TryAddTransient<IHttpContextAccessor, HttpContextAccessor>();
            // jwt wire up
            // Get options from app settings
            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));
            // Configure JwtIssuerOptions
            services.Configure<JwtIssuerOptions>(options =>
            {
                options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
                options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
            });
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],
                ValidateAudience = true,
                ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _signingKey,
                RequireExpirationTime = false,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            };
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(configureOptions =>
            {
                configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                configureOptions.TokenValidationParameters = tokenValidationParameters;
                configureOptions.SaveToken = true;
            });

            // api user claim policy
            services.AddAuthorization(options =>
            {
                //options.AddPolicy("SupperUser", policy => policy.RequireClaim(ConstantsJWT.Strings.JwtClaimIdentifiers.Rol, ConstantsJWT.Strings.JwtClaims.ApiAccess));
                options.AddPolicy(CommonConstants.Authorize.PolicyAdmin, policy => policy.RequireRole(CommonConstants.Authorize.SuperAdmin, CommonConstants.Authorize.Admin));
                //options.AddPolicy(CommonConstants.Authorize.PolicyAdminMod, policy => policy.RequireRole(CommonConstants.Authorize.SuperAdmin, CommonConstants.Authorize.Admin, CommonConstants.Authorize.SuperMod));
                //options.AddPolicy(CommonConstants.Authorize.PolicyMod, policy => policy.RequireRole(CommonConstants.Authorize.SuperAdmin, CommonConstants.Authorize.Admin, CommonConstants.Authorize.SuperMod, CommonConstants.Authorize.Mod));
                //options.AddPolicy(CommonConstants.Authorize.PolicyMember, policy => policy.RequireRole(CommonConstants.Authorize.SuperAdmin, CommonConstants.Authorize.Admin, CommonConstants.Authorize.SuperMod, CommonConstants.Authorize.Mod, CommonConstants.Authorize.SeniorMember, CommonConstants.Authorize.Member));
                options.AddPolicy(CommonConstants.Authorize.CustomAuthorization, policy => policy.Requirements.Add(new CustomAuthorization(services)));
            });
            //Initial connection string SQL.
            DbConnectionSQL.Instance(Configuration);                                   

            // add identity
            var builder = services.AddIdentityCore<ApplicationUser>(o =>
            {
                // configure identity options
                o.Password.RequireDigit = false;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 6;
            });
            builder = new IdentityBuilder(builder.UserType, typeof(ApplicationRole), builder.Services);
            builder.AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();
            builder.AddRoleManager<RoleManager<ApplicationRole>>();
            #endregion
            services.AddCors();
            services.AddMvc()
                //Chỉnh lại ký tự đầu tiên của response k bị change thành chữ thường khi call API
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ContractResolver
                        = new Newtonsoft.Json.Serialization.DefaultContractResolver();
                })
                //Validation model
                .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());
            //SESSION
            services.AddDistributedMemoryCache(); // Adds a default in-memory implementation of IDistributedCache
            services.AddSession();
            //add version
            services.AddApiVersioning(o =>
            {
                o.ReportApiVersions = true;
                o.AssumeDefaultVersionWhenUnspecified = true;
                o.DefaultApiVersion = new ApiVersion(1, 0);
            });
            //DI for OA
            AddRepositories(services);
            AddServices(services);
            RegisterMapper(services);
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("AllowAnyOrigin");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));
            app.UseCors(
                  options => options.WithOrigins(jwtAppSettingOptions[nameof(JwtIssuerOptions.UrlClientAdmin)]).AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()
            );
            //Swagger using
            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json",
                    $"{PlatformServices.Default.Application.ApplicationName} {PlatformServices.Default.Application.ApplicationVersion}");
                options.DocExpansion(DocExpansion.None);
            });
            #region --- JWT ---
            app.UseExceptionHandler(
                  builder =>
                  {
                      builder.Run(
                            async context =>
                            {
                                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                                context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                                var error = context.Features.Get<IExceptionHandlerFeature>();
                                if (error != null)
                                {
                                    context.Response.AddApplicationError(error.Error.Message);
                                    await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                                }
                            });
                  });
            app.UseAuthentication();
            #endregion
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseSession();
            app.UseMvc();
        }
        private static void AddServices(IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IAuthMessageSender, AuthMessageSender>();
            //
            services.AddTransient<IUserService, UserService>();
        }
        private static void AddRepositories(IServiceCollection services)
        {
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
        }
        private static void RegisterMapper(IServiceCollection services)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new UserMappingProfile());
            });
            var mapper = config.CreateMapper();
            services.AddSingleton(mapper);
        }
    }
}
