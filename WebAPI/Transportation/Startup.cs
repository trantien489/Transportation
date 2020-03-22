using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Domain.Auth;
using Domain.Constants;
using Domain.Helpers;
using Domain.Models;
using Domain.Repositories.Generic;
using Domain.Services;
using Infrastructure.EF.Context;
using Infrastructure.EF.Entities;
using Infrastructure.EF.SQL;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using Repository.Generic;
using Service;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerUI;
using Transportation.Mappings;

namespace Transportation
{
    public class Startup
    {
        private const string SecretKey = "TranVietTienS2HuynhThiNgocLinh"; // todo: get this from somewhere secure
        private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                                        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
                                        b => b.MigrationsAssembly("Infrastructure.EF")));

            //Initial connection string SQL.
            DbConnectionSQL.Instance(Configuration);

            #region Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Transportation APIs", Version = "V1" });
                var security = new Dictionary<string, IEnumerable<string>>
                {
                    {"Bearer", new string[] { }},
                };
                c.AddSecurityDefinition("Bearer", new ApiKeyScheme
                {
                    Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                    Name = "Authorization",
                    In = "header",
                    Type = "apiKey"
                });
                c.AddSecurityRequirement(security);
            });
            #endregion

            #region Identity
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

            #region JWT
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

            //services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //})
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(configureOptions =>
            {
                configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                configureOptions.TokenValidationParameters = tokenValidationParameters;
                configureOptions.SaveToken = true;
            });

            // api user claim policy
            services.AddAuthorization(options =>
            {
                options.AddPolicy("ApiUser", policy => policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.JwtClaims.ApiAccess));
                options.AddPolicy(CommonConstants.Authorize.PolicyAdmin, policy => policy.RequireRole(CommonConstants.Authorize.Admin));
                options.AddPolicy(CommonConstants.Authorize.Staff, policy => policy.RequireRole(CommonConstants.Authorize.Admin, CommonConstants.Authorize.Staff));
            });
            #endregion

            #region CORS
            var domains = new List<string>();
            Configuration.GetSection("Domains").Bind(domains);
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin",
                    build => build
                    .WithOrigins(domains.ToArray())
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });
            #endregion

            AddServices(services);
            RegisterMapper(services);
            services.AddMvc()
                //Chinh format json reponse
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                })
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            #region Swagger
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Transportation");
                c.DocExpansion(DocExpansion.None);
            });
            #endregion

            #region JWT
            app.UseAuthentication();
            #endregion

            #region CORS
            var domains = new List<string>();
            Configuration.GetSection("Domains").Bind(domains);
            app.UseCors(x => x.WithOrigins(domains.ToArray()).AllowAnyMethod().AllowAnyHeader());
            #endregion

            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }

        private static void AddServices(IServiceCollection services)
        {
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IAuthService, AuthService>();
            services.AddSingleton<IJwtFactory, JwtFactory>();

            services.AddTransient<ICompanyService, CompanyService>();
            services.AddTransient<ICapacityService, CapacityService>();
            services.AddTransient<ICarService, CarService>();
            services.AddTransient<IDistanceService, DistanceService>();
            services.AddTransient<IDriverService, DriverService>();
            services.AddTransient<IPriceService, PriceService>();
            services.AddTransient<ITransportationService, TransportationService>();
            services.AddTransient<IReportService, ReportService>();
            services.AddTransient<IPriceAdjustmentService, PriceAdjustmentService>();


        }
        private static void RegisterMapper(IServiceCollection services)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new UserMappingProfile());
                cfg.AddProfile(new CompanyMappingProfile());
                cfg.AddProfile(new CapacityMappingProfile());
                cfg.AddProfile(new CarMappingProfile());
                cfg.AddProfile(new DistanceMappingProfile());
                cfg.AddProfile(new DriverMappingProfile());
                cfg.AddProfile(new PriceMappingProfile());
                cfg.AddProfile(new TransportationMappingProfile());
                cfg.AddProfile(new PriceAdjustmentMappingProfile());
            });
            var mapper = config.CreateMapper();
            services.AddSingleton(mapper);
        }
    }
}
