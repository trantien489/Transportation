using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Domain.Configurations;
using Infrastructure.EF.Context;
using Microsoft.EntityFrameworkCore;

namespace Transportation
{
    public class Startup
    {
        private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            #region CORS
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
            #endregion

            services.Configure<ConnectionStrings>(Configuration.GetSection(nameof(ConnectionStrings)));

            #region JWT
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly("Infrastructure.EF")));
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
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddApiVersioning(o =>
            {
                o.ReportApiVersions = true;
                o.AssumeDefaultVersionWhenUnspecified = true;
                o.DefaultApiVersion = new ApiVersion(1, 0);
            });
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

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
