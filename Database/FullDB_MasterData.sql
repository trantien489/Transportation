USE [gias9367_transportation]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 5/12/2019 11:27:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[CreatedDate] [datetime2](7) NULL,
	[UpdatedDate] [datetime2](7) NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[UpdatedBy] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[CreatedDate] [datetime2](7) NULL,
	[UpdatedDate] [datetime2](7) NULL,
	[CreatedBy] [nvarchar](max) NULL,
	[UpdatedBy] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Capacity]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Capacity](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](20) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[CreatedBy] [varchar](100) NOT NULL,
	[UpdatedBy] [varchar](100) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Capacity] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Car]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Car](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CarNumber] [varchar](15) NOT NULL,
	[Note] [nvarchar](200) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[CreatedBy] [varchar](100) NOT NULL,
	[UpdatedBy] [varchar](100) NULL,
	[Status] [int] NOT NULL,
	[CapacityId] [bigint] NOT NULL,
	[Length] [float] NOT NULL,
	[Width] [float] NOT NULL,
	[Height] [float] NOT NULL,
 CONSTRAINT [PK_Car] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Company]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Company](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Code] [varchar](10) NOT NULL,
	[Address] [nvarchar](200) NOT NULL,
	[Distance] [float] NULL,
	[Note] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[CreatedBy] [varchar](50) NOT NULL,
	[UpdatedBy] [varchar](50) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Distance]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Distance](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[CreatedBy] [varchar](100) NOT NULL,
	[UpdatedBy] [varchar](100) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Distance] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Driver]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Driver](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Phone1] [varchar](10) NOT NULL,
	[Phone2] [varchar](10) NULL,
	[Address] [nvarchar](200) NOT NULL,
	[Note] [nvarchar](200) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[CreatedBy] [varchar](100) NOT NULL,
	[UpdatedBy] [varchar](100) NULL,
	[Status] [int] NOT NULL,
	[DriverTypeId] [bigint] NOT NULL,
 CONSTRAINT [PK_Driver] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DriverType]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DriverType](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](20) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[CreatedBy] [varchar](100) NOT NULL,
	[UpdatedBy] [varchar](100) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_DriverType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Price]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Price](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[DistanceId] [bigint] NOT NULL,
	[CapacityId] [bigint] NOT NULL,
	[Money] [money] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[CreatedBy] [varchar](100) NOT NULL,
	[UpdatedBy] [varchar](100) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Price] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transportation]    Script Date: 5/12/2019 11:27:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transportation](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CarId] [bigint] NOT NULL,
	[DriverPrimaryId] [bigint] NOT NULL,
	[DriverSecondaryId] [bigint] NULL,
	[CompanyIds] [varchar](50) NOT NULL,
	[DocumentNumber] [varchar](50) NOT NULL,
	[Report] [nvarchar](200) NULL,
	[Note] [nvarchar](200) NULL,
	[Money] [money] NOT NULL,
	[TransportDate] [datetime] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedDate] [datetime] NULL,
	[CreatedBy] [varchar](100) NOT NULL,
	[UpdatedBy] [varchar](100) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Transportation] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20191115153317_Init', N'2.2.6-servicing-10079')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (N'0a9fb582-7b34-4893-902d-5457509ab022', N'Administrator', N'ADMINISTRATOR', N'61f418ac-59ee-4405-a122-52ac3420f9e4', CAST(N'2019-11-19T00:00:00.0000000' AS DateTime2), NULL, N'Tien Tran', NULL, 1)
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (N'1313c31c-5d15-4a8f-81b1-3f26b848f7a0', N'Staff', N'STAFF', N'd0ff323a-2210-4002-aad9-1a4554182ac4', CAST(N'2019-11-19T00:00:00.0000000' AS DateTime2), NULL, N'Tien Tran', NULL, 1)
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'5d49491f-c7ac-4f3f-80d8-80e40896a492', N'0a9fb582-7b34-4893-902d-5457509ab022')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'92827550-14c3-4edc-8bc4-2a6472a92510', N'1313c31c-5d15-4a8f-81b1-3f26b848f7a0')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'9cdf8cf9-22cc-445a-93cb-880d133c2db8', N'0a9fb582-7b34-4893-902d-5457509ab022')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'ecda3cc7-6b65-4688-8ac0-c1b5d5cd075c', N'0a9fb582-7b34-4893-902d-5457509ab022')
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [FirstName], [LastName], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (N'5d49491f-c7ac-4f3f-80d8-80e40896a492', N'tien', N'TIEN', N'tien@gmail.com', N'TIEN@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEPSKGtp2JT96ZmwTJst0F2dSk75169M9YnHFFP4AO1luws5GQyhotg0PBERAOpcauQ==', N'K7JKTGGKZWPVX2MA5S7IX5USIMWOHZOY', N'0db93c8d-1a7c-47f3-a774-091916ebfde2', N'0332149942', 0, 0, NULL, 1, 0, N'Tien', N'Tran', CAST(N'2019-12-04T16:16:06.7192598' AS DateTime2), NULL, N'Tien Tran', NULL, 1)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [FirstName], [LastName], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (N'92827550-14c3-4edc-8bc4-2a6472a92510', N'guest', N'GUEST', N'guest@gmail.com', N'GUEST@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEMih4XVM0APUwcWvebcZgFUPVtHEfTi1t183Q80ObXn+ZnRUX2M0e+jJ5UrjFHrlEg==', N'PUCEOADFXPG5R5R4ZNJBD22FDRYZUI2M', N'f3a53940-dad5-4580-9251-37f5977c2f5e', N'0123456789', 0, 0, NULL, 1, 0, N'guest', N'guest', CAST(N'2019-12-04T16:18:04.7952671' AS DateTime2), NULL, N'Tien Tran', NULL, 1)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [FirstName], [LastName], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (N'9cdf8cf9-22cc-445a-93cb-880d133c2db8', N'linh', N'LINH', N'linh@gmail.com', N'LINH@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEBJwhWL5RBbOKzLg7mD0rDdxwjKyGBJRSYpDubInO2Tc2AjhdSXsHJI1UecCtz358w==', N'FX7AXQFL7BYPXMIGQ4XA57QDLGM32OKJ', N'a24e79fc-eedc-4a06-b734-d00cb804835b', N'0332149942', 0, 0, NULL, 1, 0, N'Linh', N'Huynh', CAST(N'2019-12-04T16:16:37.6908311' AS DateTime2), NULL, N'Tien Tran', NULL, 1)
INSERT [dbo].[AspNetUsers] ([Id], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [FirstName], [LastName], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (N'ecda3cc7-6b65-4688-8ac0-c1b5d5cd075c', N'admin', N'ADMIN', NULL, NULL, 0, N'AQAAAAEAACcQAAAAED/+goFaERY3M+JK6XwM+8VdonFOyK2tV8moNegrpqqgpBjjWGLK2W00KG2DbssgmA==', N'IY72I2YURE74ECURBHMLMAQRRE4NX4HX', N'91071444-62b4-4c44-8e56-4832cbeef6bc', NULL, 0, 0, NULL, 1, 0, N'tien', N'tran', CAST(N'2019-11-18T17:33:20.0607084' AS DateTime2), NULL, N'Tien Tran', NULL, 0)
SET IDENTITY_INSERT [dbo].[Capacity] ON 

INSERT [dbo].[Capacity] ([Id], [Type], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (1, N'14 (m3)', CAST(N'2019-12-04T15:51:17.240' AS DateTime), CAST(N'2019-12-05T13:37:35.567' AS DateTime), N'admin', N'linh', 1)
INSERT [dbo].[Capacity] ([Id], [Type], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (2, N'23 (m3)', CAST(N'2019-12-04T15:51:58.420' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Capacity] ([Id], [Type], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (3, N'29 (m3)', CAST(N'2019-12-04T15:52:06.267' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Capacity] ([Id], [Type], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (4, N'39 (m3)', CAST(N'2019-12-04T15:52:17.293' AS DateTime), NULL, N'admin', NULL, 1)
SET IDENTITY_INSERT [dbo].[Capacity] OFF
SET IDENTITY_INSERT [dbo].[Car] ON 

INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (1, N'51C-81526', N'', CAST(N'2019-12-04T15:56:36.680' AS DateTime), NULL, N'admin', NULL, 1, 1, 4370, 1760, 1860)
INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (2, N'51C-36671', N'', CAST(N'2019-12-04T15:57:15.300' AS DateTime), NULL, N'admin', NULL, 1, 1, 4370, 1760, 1860)
INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (3, N'51C-90089', N'', CAST(N'2019-12-04T15:58:04.033' AS DateTime), NULL, N'admin', NULL, 1, 1, 0, 0, 0)
INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (4, N'51D-27219', N'', CAST(N'2019-12-04T15:59:37.327' AS DateTime), NULL, N'admin', NULL, 1, 2, 4840, 1920, 2300)
INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (5, N'51D-50887', N'', CAST(N'2019-12-04T16:00:24.003' AS DateTime), NULL, N'admin', NULL, 1, 2, 4840, 1920, 2300)
INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (6, N'51D-53108', N'', CAST(N'2019-12-04T16:00:51.593' AS DateTime), NULL, N'admin', NULL, 1, 2, 4840, 1920, 2300)
INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (7, N'51D-46308', N'', CAST(N'2019-12-04T16:01:31.993' AS DateTime), CAST(N'2019-12-05T13:44:27.517' AS DateTime), N'admin', N'linh', 1, 3, 6000, 1950, 2000)
INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (8, N'50LD-13737', N'', CAST(N'2019-12-04T16:01:59.097' AS DateTime), CAST(N'2019-12-05T13:44:05.730' AS DateTime), N'admin', N'linh', 1, 3, 5240, 2100, 2100)
INSERT [dbo].[Car] ([Id], [CarNumber], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [CapacityId], [Length], [Width], [Height]) VALUES (9, N'70C-64245', N'', CAST(N'2019-12-05T13:45:09.740' AS DateTime), NULL, N'linh', NULL, 1, 4, 0, 0, 0)
SET IDENTITY_INSERT [dbo].[Car] OFF
SET IDENTITY_INSERT [dbo].[Company] ON 

INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (1, N'Cty Informa', N'054', N'KCN Tân Phú Trung, X.Tân Phú Trung, H.Củ Chi, TP.HCM', 0.5, NULL, CAST(N'2019-12-04T15:35:13.957' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (2, N'Cty Nam Phương', N'008', N'KCN Tân Phú Trung, X.Tân Phú Trung, H.Củ Chi, TP.HCM', 1.5, NULL, CAST(N'2019-12-04T15:35:14.413' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (3, N'Cty Acecook', N'001-4', N'KCN Tân Phú Trung, X.Tân Phú Trung, H.Củ Chi, TP.HCM', 1.5, NULL, CAST(N'2019-12-04T15:35:14.490' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (4, N'Cty Rita (Châu Giang)', N'058-6', N'KCN Tân Phú Trung, X.Tân Phú Trung, H.Củ Chi, TP.HCM', 1.5, NULL, CAST(N'2019-12-04T15:35:14.530' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (5, N'Cty Việt Tùng', N'038', N'Ấp Phú Lợi, X.Tân Phú Trung, H.Củ Chi, TP.HCM', 4.5, NULL, CAST(N'2019-12-04T15:35:14.580' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (6, N'Cty Nam Việt (Củ Chi)', N'079-2', N'X.Tân Thông Hội, H.Củ Chi, TP.HCM (gần nước mía Vườn Cau)', 7, NULL, CAST(N'2019-12-04T15:35:14.617' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (7, N'Cty Sakos', N'106', N'186A Quốc lộ 22, X.Tân Hiệp, H.Hóc Môn, TP.HCM', 8.5, NULL, CAST(N'2019-12-04T15:35:14.663' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (8, N'Cty HanSun Vina', N'161', N'223 HỒ VĂN TẮNG, ẤP CÂY DA, XÃ TÂN PHÚ TRUNG, HÓC MÔN', 9, NULL, CAST(N'2019-12-04T15:35:14.703' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (9, N'Cty Việt Giai (Phát Đạt Hưng)', N'048-1', N'Tổ 2, Ấp Hậu, X.Tân Thông Hội, H.Củ Chi, TP.Hồ Chí Minh.', 9.5, NULL, CAST(N'2019-12-04T15:35:14.740' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (10, N'Cty Nước Khoáng Saka', N'076', N'12 Trần Văn Chẩm, Ấp 3, X.Phước Vĩnh An, H.Củ Chi, TP.HCM', 9.5, NULL, CAST(N'2019-12-04T15:35:14.780' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (11, N'Cty Sài Gòn Carton', N'044', N'141/2C Tổ 1, Ấp Tân Thới 2, X.Tân Hiệp, H.Hóc Môn, TP.HCM', 10, NULL, CAST(N'2019-12-04T15:35:14.827' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (12, N'Cty Rita (Củ Chi)', N'058-4', N'Xã Tân Thông Hội, H.Củ Chi, TP.HCM (gần nước mía Vườn Cau)', 10, NULL, CAST(N'2019-12-04T15:35:14.863' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (13, N'CTY TNHH CHẾ BIẾN LƯƠNG THỰC -TP TM CHÂU GIANG', N'179', N'', 0, NULL, CAST(N'2019-12-04T15:35:14.900' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (14, N'Công Ty Quốc Tế Việt', N'172', N'', 3, NULL, CAST(N'2019-12-04T15:35:14.937' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (15, N'Cty Hoàn Vũ', N'011', N'297 Lê Minh Nhựt, Ấp Xóm Huế, X.Tân An Hội, H.Củ Chi, TP.HCM', 11, NULL, CAST(N'2019-12-04T15:35:14.980' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (16, N'Cty Hà Việt', N'096', N'KCN Đông Nam, X.Hòa Phú, H.Củ Chi, TP.HCM', 11, NULL, CAST(N'2019-12-04T15:35:15.020' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (17, N'Cty Tý Liên', N'141', N'', 11, NULL, CAST(N'2019-12-04T15:35:15.057' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (18, N'Cty Trại Việt', N'071', N'Lô D8-D9 KCN Nhị Xuân, X.Xuân Thới Sơn, H.Hóc Môn, TP.HCM.', 12, NULL, CAST(N'2019-12-04T15:35:15.093' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (19, N'Cty TNHH TMDV BC Viettel (CC)', N'087-4', N'1062 tỉnh lộ 15 ấp thạnh an xã trung an củ chi', 12, NULL, CAST(N'2019-12-04T15:35:15.137' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (20, N'Cty Minh Lâm', N'103', N'368/250, Đông Thạnh 2, Ấp 1, X.Đông Thạnh, H.Hóc Môn, TP.HCM', 13, NULL, CAST(N'2019-12-04T15:35:15.173' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (21, N'Cty Bao Bì Việt', N'107', N'60/4 Hiệp Thành 13, P.Hiệp Thành, Q.12, TP.HCM', 14, NULL, CAST(N'2019-12-04T15:35:15.220' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (22, N'Cty Mai Tú', N'050', N'Ấp Cây Sộp, X.Tân An Hội, H.Củ Chi, TP.HCM', 14, NULL, CAST(N'2019-12-04T15:35:15.267' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (23, N'Cty Carimax Sài Gòn (Túi xách)', N'035-1', N'TL15, Ấp 1, X.Tân Thạnh Tây, H.Củ Chi, TP.HCM', 15, NULL, CAST(N'2019-12-04T15:35:15.303' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (24, N'Cty Carimax Sài Gòn', N'035', N'TL15, Ấp 1, X.Tân Thạnh Tây, H.Củ Chi, TP.HCM', 15, NULL, CAST(N'2019-12-04T15:35:15.347' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (25, N'Cty Hoàng Trọng', N'153', N'2/9 TRỊNH THỊ DỐI, ĐÔNG THẠNH, HÓC MÔN', 15, NULL, CAST(N'2019-12-04T15:35:15.387' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (26, N'Cty Đại Tiến Long An', N'070', N'291, Ấp Tràm Lạc, X.Mỹ Hạnh Bắc, H.Đức Hòa, Long An.', 15, NULL, CAST(N'2019-12-04T15:35:15.427' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (27, N'Cty Continental', N'022', N'Đường tỉnh 824, Mỹ Hạnh Nam, Đức Hòa, Long An', 16, NULL, CAST(N'2019-12-04T15:35:15.473' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (28, N'Cty TNHH TMDV BC Viettel (HVN)', N'087-2', N'116/20 Huỳnh Văn Nghệ, P15, Q. Tân Bình, Tp HCM', 16, NULL, CAST(N'2019-12-04T15:35:15.513' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (29, N'Cty Toàn Cầu', N'151', N'BÃI XE NGUYÊN NGỌC, SỐ 60, ẤP TIỀN LÂN, QL 1A', 16, NULL, CAST(N'2019-12-04T15:35:15.553' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (30, N'Đông Á', N'148', N'30/4C NGUYỄN THỊ THỬ, XUÂN THỚI SƠN, HÓC MÔN. TPHCM', 17, NULL, CAST(N'2019-12-04T15:35:15.590' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (31, N'Cty KNTPVN (Vifon)', N'002', N'913 Trường Chinh, P.Tây Thạnh, Q.Tân Phú, TPHCM', 17, NULL, CAST(N'2019-12-04T15:35:15.633' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (32, N'Cty Uniben', N'004', N'Phan Văn Đối, Ấp Tiền Lân, X.Bà Điểm, H.Hóc Môn', 17, NULL, CAST(N'2019-12-04T15:35:15.673' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (33, N'Cty Nam Việt (Vinaken)', N'079-4', N'32 Đường Số 5, Bà Điểm, H.Hóc Môn, TP.HCM', 17, NULL, CAST(N'2019-12-04T15:35:15.717' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (34, N'Cty Nam Việt (Vĩnh Lộc)', N'079-5', N'KCN Vĩnh Lộc, P.Bình Hưng Hòa B, Q.Bình Tân, TPHCM', 17, NULL, CAST(N'2019-12-04T15:35:15.753' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (35, N'Tổng Cty CP Bưu Chính Viettel', N'087', N'KCN Vĩnh Lộc, P.Bình Hưng Hòa B, Q.Bình Tân, TPHCM', 17, NULL, CAST(N'2019-12-04T15:35:15.797' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (36, N'Cty DTV Tân Bình (Nakydaco)', N'097', N'889, Trường Chinh, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 17, NULL, CAST(N'2019-12-04T15:35:15.843' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (37, N'Cty Cholimex', N'110', N'KCN Vĩnh Lộc, P.Bình Hưng Hòa A, Bình Tân, TP.HCM', 17, NULL, CAST(N'2019-12-04T15:35:15.883' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (38, N'Cty Rita (Vinaken)', N'058-5', N'Bà Điểm, P.Tân Thới Nhất, Q.12, TP.HCM (gần KCN Vĩnh Lộc)', 17, NULL, CAST(N'2019-12-04T15:35:15.920' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (39, N'Công ty MTV Nam Việt ( Hóc Môn)', N'079-6', N'', 17, NULL, CAST(N'2019-12-04T15:35:15.957' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (40, N'Cty Thuốc Lá Sài Gòn', N'024', N'KCN Vĩnh Lộc, P.Bình Hưng Hòa B, Q.Bình Tân, TPHCM', 18, NULL, CAST(N'2019-12-04T15:35:15.997' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (41, N'Cty Đại Cát', N'003', N'1/147A Nguyễn Văn Quá, P.Đông Hưng Thuận, Q.12, TP.HCM', 18, NULL, CAST(N'2019-12-04T15:35:16.033' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (42, N'Cty Nguyên Quang Minh', N'064', N'Ngã tư Gò mây, Q.Bình Tân, TP.HCM (chành xe Châu Thành)', 18, NULL, CAST(N'2019-12-04T15:35:16.080' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (43, N'Cty Aval', N'005', N'KCN Vĩnh Lộc, P.Bình Hưng Hòa B, Q.Bình Tân, TPHCM', 18, NULL, CAST(N'2019-12-04T15:35:16.127' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (44, N'Cty Acecook VN', N'001', N'KCN Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.170' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (45, N'Cty Thiên Hương', N'006', N'01 Lê Đức Thọ, Khu phố 2, P.Tân Thới Hiệp, Q.12, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.213' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (46, N'Cty Acecook VN (NM1-TB)', N'001-1', N'KCN Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.257' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (47, N'Cty Kim Cương', N'069', N'KCN Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.297' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (48, N'Cty Âu Lạc', N'093', N'KCN Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.337' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (49, N'Cty Bao Bì Sài Gòn', N'036', N'Lô III-13, Số 13, KCN.Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.383' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (50, N'Cty CP TB Nhà Bếp Vina', N'028', N'Đường CN1, KCN Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.427' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (51, N'Cty Sapaco', N'075', N'KCN Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.467' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (52, N'Cty Đại Việt', N'140', N'KCN Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 19, NULL, CAST(N'2019-12-04T15:35:16.507' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (53, N'CÔNG TY TNHH LAM.H', N'169', N'', 19, NULL, CAST(N'2019-12-04T15:35:16.547' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (54, N'Cty Thorakao', N'121', N'1191 Quốc lộ 1A, P.Tân Thới An, Q.12, TP.HCM (cầu vượt Metro)', 20, NULL, CAST(N'2019-12-04T15:35:16.583' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (55, N'Cty Acecook VN (NM2-TB)', N'001-2', N'KCN Tân Bình, P.Tây Thạnh, Q.Tân Phú, TP.HCM', 20, NULL, CAST(N'2019-12-04T15:35:16.623' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (56, N'Cty Huỳnh Thảo', N'049', N'Tổ 6, Ấp Bàu Điều Thượng, X.Phước Hạnh, H.Củ Chi, TP.HCM', 21, NULL, CAST(N'2019-12-04T15:35:16.660' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (57, N'CTY 4 ORANGERS', N'180', N'KCN Đức Hòa, Mỹ Hạnh, Long An', 22, NULL, CAST(N'2019-12-04T15:35:16.703' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (58, N'Cty Duy Tân (ĐH)', N'013-2', N'KCN Đức Hòa 1, X.Đức Hòa Đông, H.Đức Hòa, Long An', 22, NULL, CAST(N'2019-12-04T15:35:16.743' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (59, N'Cty Phú Mỹ', N'017', N'196/12 Cộng Hòa, P.12, Q.Tân Bình, TP.HCM', 22, NULL, CAST(N'2019-12-04T15:35:16.790' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (60, N'Cty Smart Think', N'133', N'MD7 KCN Đức Hòa 1, X.Đức Hòa Đông, H.Đức Hòa, Long An.', 22, NULL, CAST(N'2019-12-04T15:35:16.830' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (61, N'Cty Thành Đạt', N'018', N'76 Nguyễn Thái Bình, KP.9, P.Phú Hòa, TP.Thủ Dầu Một, Bình Dương', 22, NULL, CAST(N'2019-12-04T15:35:16.877' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (62, N'Cty Nông Dược Hai Quy Nhơn', N'065', N'KCN Đức Hòa 1, X.Đức Hòa Đông, H.Đức Hòa, Long An', 22, NULL, CAST(N'2019-12-04T15:35:16.917' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (63, N'Cty Chất Lượng', N'082', N'KCN Đức Hòa 1, X.Đức Hòa Đông, H.Đức Hòa, Long An', 22, NULL, CAST(N'2019-12-04T15:35:16.980' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (64, N'Cty Đồng Xanh', N'057', N'KCN Đức Hòa 1, X.Đức Hòa Đông, H.Đức Hòa, Long An', 22, NULL, CAST(N'2019-12-04T15:35:17.023' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (65, N'Cty An Hiệp Xanh', N'057-1', N'KCN Đức Hòa 1, X.Đức Hòa Đông, H.Đức Hòa, Long An', 22, NULL, CAST(N'2019-12-04T15:35:17.060' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (66, N'Cty Địa Cầu Xanh', N'074', N'3/5 HT19, P.Hiệp Thành, Q.12, TP.HCM', 22, NULL, CAST(N'2019-12-04T15:35:17.107' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (67, N'Cty Tân Nam Phát', N'166', N'', 22, NULL, CAST(N'2019-12-04T15:35:17.147' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (68, N'Cty Anh Cát Hoà', N'031', N'22 Hà Huy Giáp, P.Thạnh Lộc, Q.12, TP.HCM', 23, NULL, CAST(N'2019-12-04T15:35:17.183' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (69, N'CS TP Lan Anh', N'010', N'98 Lạc Long Quân, P.10, Q.Tân Bình, TP.HCM', 23, NULL, CAST(N'2019-12-04T15:35:17.233' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (70, N'Chăm Sóc Việt', N'143', N'Lô B 124, Đường số 7, KCN Thái Hòa, Long An', 23, NULL, CAST(N'2019-12-04T15:35:17.277' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (71, N'Cty Dệt Đông Quang', N'043', N'KCN Hải Sơn, Ấp Bình Tiền 2, X.Đức Hòa Hạ, H.Đức Hòa, Long An', 24, NULL, CAST(N'2019-12-04T15:35:17.317' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (72, N'Cty Hotdeal', N'112', N'70 Lữ Gia, Phường 15, Quận 11, Hồ Chí Minh', 24, NULL, CAST(N'2019-12-04T15:35:17.357' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (73, N'Cty Bico', N'037', N'637H đường Bùi Thị Điệt, ấp Bàu Cạp, xã Nhuận Đức, Huyện Củ Chi, TP.HCM', 24, NULL, CAST(N'2019-12-04T15:35:17.403' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (74, N'Cty Định Quốc', N'108', N'105/59 Đường TL37, Tổ 11, Khu phố 1, P.Thạnh Lộc, Q.12, TP.HCM', 25, NULL, CAST(N'2019-12-04T15:35:17.443' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (75, N'Cty Nguyên Tân', N'144', N'15C1 HÀ HUY GIÁP, P. THẠNH LỘC, Q12', 25, NULL, CAST(N'2019-12-04T15:35:17.490' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (76, N'Cty TNHH TMDV BC Viettel', N'087-1', N'161 Lý Chính Thắng, Q.3, TPHCM', 26, NULL, CAST(N'2019-12-04T15:35:17.543' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (77, N'Cty TNHH TMDV BC Viettel (LCT)', N'087-3', N'177 Bis Lý Chính Thắng, Q.3, TPHCM', 26, NULL, CAST(N'2019-12-04T15:35:17.593' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (78, N'CTY PROSONAN FRUIT', N'164', N'116/33B, LÊ ĐÌNH CẨN, P. TÂN TẠO, Q. BÌNH TÂN', 26, NULL, CAST(N'2019-12-04T15:35:17.637' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (79, N'Cty Thuốc Lá Bình Dương', N'027', N'609 Lê Hồng Phong, P.Phú Hòa, TP.Thủ Dầu Một, Bình Dương', 27, NULL, CAST(N'2019-12-04T15:35:17.677' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (80, N'Cty Dệt Kim Đông Quang', N'041', N'Ấp Bình Tiền 2, X.Đức Hòa Hạ, H.Đức Hòa, Long An', 27, NULL, CAST(N'2019-12-04T15:35:17.723' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (81, N'Cty Dệt May Đông Khánh', N'042', N'KCN Tân Đức, X.Đức Hòa Hạ, H.Đức Hòa, Long An', 27, NULL, CAST(N'2019-12-04T15:35:17.767' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (82, N'Cty Sài Gòn Tâm Tâm', N'104', N'B1-B2, Cụm CN Indira Gandhi, 02 QL1A, P.HBP, Q.Thủ Đức, TP.HCM', 28, NULL, CAST(N'2019-12-04T15:35:17.803' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (83, N'Cty Sài Gòn Samy', N'029', N'647/24 Quốc lộ 13, KP3, P.Hiệp Bình Phước, Q.Thủ Đức, TP.HCM', 28, NULL, CAST(N'2019-12-04T15:35:17.847' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (84, N'Cty Trường Thịnh', N'061', N'Lô D9, Đường 6A, KCN Lê Minh Xuân, X.T.Nhựt, H.Bình Chánh, TP.HCM', 28, NULL, CAST(N'2019-12-04T15:35:17.887' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (85, N'Cty Cẩm Đạt', N'062', N'KCN Hoàng Gia, X.Mỹ Hạnh Nam, H.Đức Hòa, Long An', 28, NULL, CAST(N'2019-12-04T15:35:17.933' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (86, N'Cty Phượng Hoàng', N'016', N'80 Đại Lộ Bình Dương, P.Phú Hòa, TP.Thủ Dầu Một, Bình Dương', 28, NULL, CAST(N'2019-12-04T15:35:17.973' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (87, N'Cty Duy Tân (BD)', N'013-3', N'Lô B1-B2, KCN Việt Hương 2, TX.Bến Cát, Bình Dương', 29, NULL, CAST(N'2019-12-04T15:35:18.020' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (88, N'Cty Thăng Long', N'094', N'KCN Lê Minh Xuân, X.Tân Nhựt, H.Bình Chánh, TP.HCM', 29, NULL, CAST(N'2019-12-04T15:35:18.060' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (89, N'Cty BKV', N'129', N'668/39 Quốc Lộ 13, P.Hiệp Bình Phước, Q.Thủ Đức, TP.HCM', 29, NULL, CAST(N'2019-12-04T15:35:18.113' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (90, N'CTY DUY TÂN BÌNH DƯƠNG', N'013-4', N'', 29, NULL, CAST(N'2019-12-04T15:35:18.157' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (91, N'ECOTECH', N'177', N'', 29, NULL, CAST(N'2019-12-04T15:35:18.197' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (92, N'Cty Duy Tân (TĐN)', N'013-1', N'B22/462 Trần Đại Nghĩa Ấp 2, X.Tân Nhựt, H.Bình Chánh, TP.HCM', 30, NULL, CAST(N'2019-12-04T15:35:18.237' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (93, N'Cty ADL', N'116', N'3/107 Thủ Khoa Huân, P.Thuận Giao, TX.Thuận An, Bình Dương', 30, NULL, CAST(N'2019-12-04T15:35:18.287' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (94, N'Cty Rita (VSIP)', N'058-3', N'KCN VSIP, P.An Phú, TX.Thuận An, Bình Dương', 30, NULL, CAST(N'2019-12-04T15:35:18.327' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (95, N'Cty Duy Tân (HHL)', N'013', N'298 Hồ Học Lãm, P.An Lạc, Q.Bình Tân, TP.HCM', 30, NULL, CAST(N'2019-12-04T15:35:18.367' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (96, N'Cty Broad Peak', N'132', N'Vòng xoay An Lạc, Q.Bình Tân, TP.HCM (chành xe Quang Khoa)', 31, NULL, CAST(N'2019-12-04T15:35:18.407' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (97, N'Cty Chành Xe Quang Khoa', N'132-1', N'Vòng xoay An Lạc, Q.Bình Tân, TP.HCM (chành xe Quang Khoa)', 31, NULL, CAST(N'2019-12-04T15:35:18.450' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (98, N'Cty Hưng Việt', N'109', N'3/31 Khu phố Bình Đường, P.An Bình, TX.Dĩ An, Bình Dương', 31, NULL, CAST(N'2019-12-04T15:35:18.500' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (99, N'Cty Trái Cây Lạ VN', N'127', N'Số 6, Đường Số 7, KDC Bình Dân, P.Hiệp Bình Chánh, Q.Thủ Đức, TP.HCM', 31, NULL, CAST(N'2019-12-04T15:35:18.543' AS DateTime), NULL, N'Admin', NULL, 1)
GO
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (100, N'Cty Minh Phát', N'155', N'Đường số 3, KCN Tân Tạo, P.Tân Tạo A, Bình Tân, TpHCM', 31, NULL, CAST(N'2019-12-04T15:35:18.587' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (101, N'Cty Rượu Thế Giới', N'091', N'KCN Bình Đường 1, P.An Bình, TX.Dĩ An, Bình Dương', 32, NULL, CAST(N'2019-12-04T15:35:18.630' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (102, N'Cty Công Tô', N'047', N'740/21B Quốc lộ 13, Khu phố 4, P.Hiệp Bình Phước, Q.Thủ Đức, TP.HCM', 32, NULL, CAST(N'2019-12-04T15:35:18.667' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (103, N'Cty Việt Phú', N'142', N'Chành xe, Tân Tạo, Bình Chánh, TP.HCM', 32, NULL, CAST(N'2019-12-04T15:35:18.717' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (104, N'Sahaka', N'147', N'22  Vsip II, Đường số 1, KCN VN Singapore II, P. Hòa Phú, Thủ dầu 1, BD', 32, NULL, CAST(N'2019-12-04T15:35:18.757' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (105, N'Cty Miko', N'084', N'Số 16-18, ĐT 743, KCN Sóng Thần, P.Dĩ An, TX.Dĩ An, Bình Dương', 33, NULL, CAST(N'2019-12-04T15:35:18.797' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (106, N'Cty Uni President', N'154', N'Số 16-18, ĐT 743, KCN Sóng Thần, P.Dĩ An, TX.Dĩ An, Bình Dương', 33, NULL, CAST(N'2019-12-04T15:35:18.840' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (107, N'Cty Rita', N'058', N'08 Đại Lộ Thống Nhất, KCN Sóng Thần 2, P.Dĩ An, TX.Dĩ An, Bình Dương', 33, NULL, CAST(N'2019-12-04T15:35:18.880' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (108, N'Cty TM Điện Quang (BD)', N'088-1', N'KCN Đồng An, P.Bình Hòa, TX.Thuận An, Bình Dương', 33, NULL, CAST(N'2019-12-04T15:35:18.923' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (109, N'Cty Rita (Sóng Thần)', N'058-1', N'KCN Sóng Thần, P.Dĩ An, TX.Dĩ An, Bình Dương', 33, NULL, CAST(N'2019-12-04T15:35:18.963' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (110, N'Cty LTTP Milieket - Colusa', N'033', N'1230 Kha Vạn Cân, P.Linh Trung, Q.Thủ Đức, TP.HCM', 33, NULL, CAST(N'2019-12-04T15:35:19.007' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (111, N'Cty Saha', N'156', N'LÔ 1-1 ĐƯỜNG SỐ 2, KCN TÂN ĐÔNG HIỆP A, TX DĨ AN, BÌNH DƯƠNG', 33, NULL, CAST(N'2019-12-04T15:35:19.047' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (112, N'Cty Nam Việt Foods (BD)', N'079-3', N'994/1C Nguyễn Thị Minh Khai, P.Tân Bình, TX.Dĩ An, Bình Dương', 34, NULL, CAST(N'2019-12-04T15:35:19.087' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (113, N'Cty Á Châu Sài Gòn', N'012', N'Lô C-9E-CN, KCN Mỹ Phước 3, P.Thới Hòa, TX.Bến Cát, Bình Dương', 36, NULL, CAST(N'2019-12-04T15:35:19.137' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (114, N'CN Cty Acecook VN (BD)', N'001-3', N'Khu Phố 1B, P.An Phú, TX.Thuận An, Bình Dương', 36, NULL, CAST(N'2019-12-04T15:35:19.180' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (115, N'Cty Nam Việt (Bình Dương)', N'079-1', N'Số 994/1C, Nguyễn Thị Minh Khai, P.Tân Bình, TX.Dĩ An, Bình Dương.', 38, NULL, CAST(N'2019-12-04T15:35:19.220' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (116, N'Cty Nam Mekong (HNLV)', N'092', N'KCN Nam Tân Uyên, TX.Tân Uyên, Bình Dương', 39, NULL, CAST(N'2019-12-04T15:35:19.263' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (117, N'Cty Dương Lê', N'111', N'KCN Nam Tân Uyên, TX.Tân Uyên, Bình Dương', 39, NULL, CAST(N'2019-12-04T15:35:19.307' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (118, N'Cty Tân Tấn Lộc', N'113', N'Đường N8, KCN Nam Tân Uyên, TX.Tân Uyên, Bình Dương', 39, NULL, CAST(N'2019-12-04T15:35:19.350' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (119, N'Cty Thực Phẩm Quốc Tế', N'158', N'30A NGUYỄN Ư DĨ, THẢO ĐIỀN, QUẬN 2', 39, NULL, CAST(N'2019-12-04T15:35:19.393' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (120, N'CTY G.B.C.O', N'170', N'KP Đông An, Tân Đông Hiệp, Dĩ An, Bình Dương', 39, NULL, CAST(N'2019-12-04T15:35:19.433' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (121, N'Cty Hóa Nông Lúa Vàng', N'066', N'M8 Đường N8, KCN Nam Tân Uyên, TX.Tân Uyên, Bình Dương', 40, NULL, CAST(N'2019-12-04T15:35:19.473' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (122, N'Cty Việt Giai (Hợp Mỹ - BD)', N'048-2', N'Lô S Đường D6-N11, KCN Nam Tân Uyên, TX.Tân Uyên, Bình Dương.', 40, NULL, CAST(N'2019-12-04T15:35:19.517' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (123, N'Metro Food', N'067', N'13B KDC Conic, Nguyễn Văn Linh, H.Bình Chánh, TP.HCM', 40, NULL, CAST(N'2019-12-04T15:35:19.560' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (124, N'Cty Dầu Thực Vật Bình An', N'040', N'ĐT743C, KP Quyết Thắng, P.Bình Thắng, TX.Dĩ An, Bình Dương', 40, NULL, CAST(N'2019-12-04T15:35:19.603' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (125, N'Cty Rita (Đức Phát)', N'058-2', N'Đồi 29, Đường 2/9, P. Mỹ Phước, TX.Bến Cát, Bình Dương', 42, NULL, CAST(N'2019-12-04T15:35:19.643' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (126, N'Cty Thuận Phát', N'063', N'Số 29 KP.8, Phan Chu Trinh, P.Vĩnh Cửu, TP.Biên Hòa, Đồng Nai', 44, NULL, CAST(N'2019-12-04T15:35:19.683' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (127, N'Cty Thực Phẩm Pan', N'119', N'Lô A/1-9, Đường VL3, KCN Vĩnh Lộc 2, X.Long Hiệp, H.Bến Lức, Long An', 45, NULL, CAST(N'2019-12-04T15:35:19.723' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (128, N'Cty CỔ PHẦN BIBICA', N'190', N'Lô A/1-9, Đường VL3, KCN Vĩnh Lộc 2, X.Long Hiệp, H.Bến Lức, Long An', 45, NULL, CAST(N'2019-12-04T15:35:19.777' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (129, N'Cty Điện Quang (ĐN)', N'088', N'Đường số 3, KCN Biên Hòa 1, P.An Bình, TP.Biên Hòa, Đồng Nai', 48, NULL, CAST(N'2019-12-04T15:35:19.827' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (130, N'Cty Olam Việt Nam', N'126', N'11 Đường 9A, KCN Biên Hòa 1, P.An Bình, TP.Biên Hòa, Đồng Nai', 48, NULL, CAST(N'2019-12-04T15:35:19.873' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (131, N'Cty Fumakila Việt Nam', N'032', N'Số 7 Đường 15A, KCN Biên Hòa 2, P.An Bình, TP.Biên Hòa, Đồng Nai', 48, NULL, CAST(N'2019-12-04T15:35:19.917' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (132, N'Gold Food', N'145', N'Thửa đất số 688, tờ bản đồ số 57, ấp Bưng thuốc, xã Long Nguyên, Bàu bàng, BD', 48, NULL, CAST(N'2019-12-04T15:35:19.957' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (133, N'Cty Thuốc Lá Long An', N'026', N'08 QL1A, Nhựt Chánh, Bến Lức, Long An', 50, NULL, CAST(N'2019-12-04T15:35:20.000' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (134, N'Cty Trung Anh', N'137', N'KCN Biên Hòa 1, P.An Bình, TP.Biên Hòa, Đồng Nai', 54, NULL, CAST(N'2019-12-04T15:35:20.043' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (135, N'Cty Valency', N'073', N'KCN Hiệp Phước, X.Hiệp Phước, H.Nhà Bè, TP.HCM', 55, NULL, CAST(N'2019-12-04T15:35:20.087' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (136, N'Cty CP Trang', N'114', N'KCN Hiệp Phước, X.Hiệp Phước, H.Nhà Bè, TP.HCM', 55, NULL, CAST(N'2019-12-04T15:35:20.130' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (137, N'Cty Asia Telecom', N'020', N'261/341 Đường Nguyễn Văn Tạo, Long Thới, Nhà Bè, Hồ Chí Minh', 55, NULL, CAST(N'2019-12-04T15:35:20.177' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (138, N'Cty Thiên Hữu Phước', N'032-1', N'3 Nguyễn Ái Quốc, P.Hố Nai, TP.Biên Hòa, Đồng Nai', 55, NULL, CAST(N'2019-12-04T15:35:20.217' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (139, N'CN CTY TNHH TQN', N'178', N'', 58, NULL, CAST(N'2019-12-04T15:35:20.267' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (140, N'Cty Ngôi Sao', N'117', N'Đường số 6, KCN Tam Phước, X.Tam Phước, H.Long Thành, Đồng Nai', 61, NULL, CAST(N'2019-12-04T15:35:20.310' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (141, N'Cty Việt Giai', N'048', N'Tỉnh Lộ 767, Ấp Song Mây, X.Bắc Sơn, H.Trảng Bom, Đồng Nai', 63, NULL, CAST(N'2019-12-04T15:35:20.350' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (142, N'Cty Mỹ Việt', N'138', N'KCN Lợi Bình Nhơn, Xã Lợi Bình Nhơn, TP.Tân An, Long An', 68, NULL, CAST(N'2019-12-04T15:35:20.397' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (143, N'Cty Vitasco', N'034', N'63A Ấp Tân Thịnh, X.Đồi 61, H.Trảng Bom, Đồng Nai', 70, NULL, CAST(N'2019-12-04T15:35:20.443' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (144, N'Cty Gạch Men VTC', N'023', N'Đường số 3, KCN Gò Dầu, X.Phước Thái, Long Thành, Đồng Nai', 75, NULL, CAST(N'2019-12-04T15:35:20.500' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (145, N'Cty Gạch Men Nhà Ý', N'089', N'Đường số 3, KCN Mỹ Xuân A, X.Mỹ Xuân, H.Tân Thành, BR-VT', 83, NULL, CAST(N'2019-12-04T15:35:20.543' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (146, N'Cty Găng Tay Nam Việt (N.Máy)', N'072', N'Tổ 2, Ấp 7, X.Phước Bình, H.Long Thành, Đồng Nai.', 84, NULL, CAST(N'2019-12-04T15:35:20.590' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (147, N'Cty Xay Lúa Mì Việt Nam (VFM)', N'039', N'KCN Mỹ Xuân A, X.Mỹ Xuân, H.Tân Thành, Bà Rịa - Vũng Tàu', 90, NULL, CAST(N'2019-12-04T15:35:20.633' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (148, N'Cty Gia Nhật Phong', N'128', N'245 Đường 21/4, Ấp Cẩm Tân, X.Xuân Tân, TX.Long khánh, Đồng Nai', 98, NULL, CAST(N'2019-12-04T15:35:20.680' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (149, N'Cty One One MN', N'118', N'Cụm CN DV-TM Trường Xuân, Ấp 4, X.Trường Xuân, H.Tháp Mười, ĐT', 99, NULL, CAST(N'2019-12-04T15:35:20.730' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (150, N'Cty Thiên Hà', N'124', N'Cụm CN DV-TM Trường Xuân, Ấp 4, X.Trường Xuân, H.Tháp Mười, ĐT', 100, NULL, CAST(N'2019-12-04T15:35:20.773' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (151, N'Cty Thuốc Lá Cửu Long', N'025', N'4D Nguyễn Trung Trực, P.8, TP.Vĩnh Long, Vĩnh Long', 146, NULL, CAST(N'2019-12-04T15:35:20.817' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (152, N'Cty Phú Long', N'115', N'Lô A1, KCN Hòa Phú, X.Hòa Phú, H.Long Hồ, Vĩnh Long', 151, NULL, CAST(N'2019-12-04T15:35:20.863' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (153, N'Cty Hóa Nông Lúa Vàng (HG)', N'066-1', N'Cụm CN tập trung Đông Phú, X.Đông Phú, H.Châu Thành, Hậu Giang', 185, NULL, CAST(N'2019-12-04T15:35:20.910' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (154, N'CTY VEMEDIM', N'163', N'', 185, NULL, CAST(N'2019-12-04T15:35:20.957' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (155, N'Cty Thủy Sản An Giang', N'130', N'1234 Trần Hưng Đạo, P.Bình Đức, TP.Long Xuyên, An Giang', 202, NULL, CAST(N'2019-12-04T15:35:21.003' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (156, N'Cty Broad Peak (STR)', N'132-3', N'Lô T, Đường N2, KCN An Hiệp, H.Châu Thành, Sóc Trăng', 230, NULL, CAST(N'2019-12-04T15:35:21.043' AS DateTime), NULL, N'Admin', NULL, 1)
INSERT [dbo].[Company] ([Id], [Name], [Code], [Address], [Distance], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (157, N'Cty Trung Nguyên', N'152', N'Bình Thuận', 255, NULL, CAST(N'2019-12-04T15:35:21.087' AS DateTime), NULL, N'Admin', NULL, 1)
SET IDENTITY_INSERT [dbo].[Company] OFF
SET IDENTITY_INSERT [dbo].[Distance] ON 

INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (1, N'0-10', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (2, N'11-20', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (3, N'21-30', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (4, N'31-45', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (5, N'46-60', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (6, N'61-75', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (7, N'76-95', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (8, N'96-120', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (9, N'121-150', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (10, N'151-180', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (11, N'181-210', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (12, N'211-250', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[Distance] ([Id], [Description], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (13, N'251-280', CAST(N'2019-12-04T15:49:39.523' AS DateTime), NULL, N'admin', NULL, 1)
SET IDENTITY_INSERT [dbo].[Distance] OFF
SET IDENTITY_INSERT [dbo].[Driver] ON 

INSERT [dbo].[Driver] ([Id], [Name], [Phone1], [Phone2], [Address], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [DriverTypeId]) VALUES (1, N'Dương', N'0', N'', N'Không có', N'', CAST(N'2019-12-05T13:47:36.793' AS DateTime), NULL, N'linh', NULL, 1, 1)
INSERT [dbo].[Driver] ([Id], [Name], [Phone1], [Phone2], [Address], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [DriverTypeId]) VALUES (2, N'Vũ', N'0', N'', N'Không có', N'', CAST(N'2019-12-05T13:47:55.047' AS DateTime), NULL, N'linh', NULL, 1, 1)
INSERT [dbo].[Driver] ([Id], [Name], [Phone1], [Phone2], [Address], [Note], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status], [DriverTypeId]) VALUES (3, N'Dũng', N'0', N'', N'Không có', N'', CAST(N'2019-12-05T13:48:08.227' AS DateTime), NULL, N'linh', NULL, 1, 1)
SET IDENTITY_INSERT [dbo].[Driver] OFF
SET IDENTITY_INSERT [dbo].[DriverType] ON 

INSERT [dbo].[DriverType] ([Id], [Type], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (1, N'Tài xế', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
INSERT [dbo].[DriverType] ([Id], [Type], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (2, N'Phụ xe', CAST(N'2019-11-22T00:00:00.000' AS DateTime), NULL, N'admin', NULL, 1)
SET IDENTITY_INSERT [dbo].[DriverType] OFF
SET IDENTITY_INSERT [dbo].[Price] ON 

INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (1, 1, 1, 470400.0000, CAST(N'2019-12-05T13:41:31.963' AS DateTime), CAST(N'2019-12-05T16:00:01.057' AS DateTime), N'linh', N'tien', 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (2, 2, 1, 568400.0000, CAST(N'2019-12-05T13:41:58.907' AS DateTime), CAST(N'2019-12-05T16:02:00.380' AS DateTime), N'linh', N'tien', 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (3, 1, 2, 567420.0000, CAST(N'2019-12-05T16:00:25.990' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (4, 1, 3, 626220.0000, CAST(N'2019-12-05T16:00:50.763' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (5, 1, 4, 803600.0000, CAST(N'2019-12-05T16:01:08.380' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (6, 2, 2, 641900.0000, CAST(N'2019-12-05T16:02:15.907' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (7, 2, 3, 700700.0000, CAST(N'2019-12-05T16:02:25.757' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (8, 2, 4, 1122100.0000, CAST(N'2019-12-05T16:02:36.663' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (9, 3, 1, 679140.0000, CAST(N'2019-12-05T16:03:00.210' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (10, 3, 2, 823200.0000, CAST(N'2019-12-05T16:03:09.887' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (11, 3, 3, 882000.0000, CAST(N'2019-12-05T16:03:26.203' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (12, 3, 4, 1372000.0000, CAST(N'2019-12-05T16:03:36.927' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (13, 4, 1, 784000.0000, CAST(N'2019-12-05T16:04:13.147' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (14, 4, 2, 984900.0000, CAST(N'2019-12-05T16:04:44.190' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (15, 4, 3, 1043700.0000, CAST(N'2019-12-05T16:04:53.487' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (16, 4, 4, 1764000.0000, CAST(N'2019-12-05T16:05:02.687' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (17, 5, 1, 977060.0000, CAST(N'2019-12-05T16:05:21.827' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (18, 5, 2, 1152480.0000, CAST(N'2019-12-05T16:05:32.903' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (19, 5, 3, 1211280.0000, CAST(N'2019-12-05T16:05:41.953' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (20, 5, 4, 2146200.0000, CAST(N'2019-12-05T16:05:51.377' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (21, 6, 1, 1136800.0000, CAST(N'2019-12-05T16:06:19.437' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (22, 6, 2, 1447460.0000, CAST(N'2019-12-05T16:06:29.897' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (23, 6, 3, 1506260.0000, CAST(N'2019-12-05T16:06:41.193' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (24, 6, 4, 2416680.0000, CAST(N'2019-12-05T16:06:57.223' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (25, 7, 1, 1362200.0000, CAST(N'2019-12-05T16:07:17.500' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (26, 7, 2, 1778700.0000, CAST(N'2019-12-05T16:07:35.430' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (27, 7, 3, 1837500.0000, CAST(N'2019-12-05T16:07:45.000' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (28, 7, 4, 2665600.0000, CAST(N'2019-12-05T16:08:29.090' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (29, 8, 1, 1528800.0000, CAST(N'2019-12-05T16:08:47.193' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (30, 8, 2, 2244200.0000, CAST(N'2019-12-05T16:08:59.543' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (31, 8, 3, 2303000.0000, CAST(N'2019-12-05T16:09:10.323' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (32, 8, 4, 3183040.0000, CAST(N'2019-12-05T16:09:34.040' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (33, 9, 1, 1754200.0000, CAST(N'2019-12-05T16:09:51.107' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (34, 9, 2, 2489200.0000, CAST(N'2019-12-05T16:10:04.313' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (35, 9, 3, 2548000.0000, CAST(N'2019-12-05T16:11:03.293' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (36, 9, 4, 3470180.0000, CAST(N'2019-12-05T16:11:13.977' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (37, 10, 1, 1832600.0000, CAST(N'2019-12-05T16:11:28.033' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (38, 10, 2, 2734200.0000, CAST(N'2019-12-05T16:11:37.457' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (39, 10, 3, 2793000.0000, CAST(N'2019-12-05T16:11:44.810' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (40, 10, 4, 3470180.0000, CAST(N'2019-12-05T16:12:03.153' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (41, 11, 1, 2058000.0000, CAST(N'2019-12-05T16:12:22.557' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (42, 11, 2, 2979200.0000, CAST(N'2019-12-05T16:12:34.507' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (43, 11, 3, 3038000.0000, CAST(N'2019-12-05T16:12:52.793' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (44, 11, 4, 3920000.0000, CAST(N'2019-12-05T16:13:06.020' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (45, 12, 1, 2254000.0000, CAST(N'2019-12-05T16:13:23.370' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (46, 12, 2, 3087000.0000, CAST(N'2019-12-05T16:13:34.707' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (47, 12, 3, 3234000.0000, CAST(N'2019-12-05T16:13:42.670' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (48, 12, 4, 4116000.0000, CAST(N'2019-12-05T16:14:03.720' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (49, 13, 1, 2744000.0000, CAST(N'2019-12-05T16:14:23.463' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (50, 13, 2, 0.0000, CAST(N'2019-12-05T16:14:37.030' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (51, 13, 3, 3430000.0000, CAST(N'2019-12-05T16:14:54.347' AS DateTime), NULL, N'tien', NULL, 1)
INSERT [dbo].[Price] ([Id], [DistanceId], [CapacityId], [Money], [CreatedDate], [UpdatedDate], [CreatedBy], [UpdatedBy], [Status]) VALUES (52, 13, 4, 3430000.0000, CAST(N'2019-12-05T16:15:09.013' AS DateTime), NULL, N'tien', NULL, 1)
SET IDENTITY_INSERT [dbo].[Price] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [UK_CompanyCode]    Script Date: 5/12/2019 11:27:45 PM ******/
ALTER TABLE [dbo].[Company] ADD  CONSTRAINT [UK_CompanyCode] UNIQUE NONCLUSTERED 
(
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [UK_DistanceId_CapacityId]    Script Date: 5/12/2019 11:27:45 PM ******/
ALTER TABLE [dbo].[Price] ADD  CONSTRAINT [UK_DistanceId_CapacityId] UNIQUE NONCLUSTERED 
(
	[DistanceId] ASC,
	[CapacityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[Car]  WITH CHECK ADD  CONSTRAINT [FK_Car_Capacity] FOREIGN KEY([CapacityId])
REFERENCES [dbo].[Capacity] ([Id])
GO
ALTER TABLE [dbo].[Car] CHECK CONSTRAINT [FK_Car_Capacity]
GO
ALTER TABLE [dbo].[Driver]  WITH CHECK ADD  CONSTRAINT [FK_Driver_DriverType] FOREIGN KEY([DriverTypeId])
REFERENCES [dbo].[DriverType] ([Id])
GO
ALTER TABLE [dbo].[Driver] CHECK CONSTRAINT [FK_Driver_DriverType]
GO
ALTER TABLE [dbo].[Price]  WITH CHECK ADD  CONSTRAINT [FK_Price_Capacity] FOREIGN KEY([CapacityId])
REFERENCES [dbo].[Capacity] ([Id])
GO
ALTER TABLE [dbo].[Price] CHECK CONSTRAINT [FK_Price_Capacity]
GO
ALTER TABLE [dbo].[Price]  WITH CHECK ADD  CONSTRAINT [FK_Price_Distance] FOREIGN KEY([DistanceId])
REFERENCES [dbo].[Distance] ([Id])
GO
ALTER TABLE [dbo].[Price] CHECK CONSTRAINT [FK_Price_Distance]
GO
ALTER TABLE [dbo].[Transportation]  WITH CHECK ADD  CONSTRAINT [FK_Transportation_Car] FOREIGN KEY([CarId])
REFERENCES [dbo].[Car] ([Id])
GO
ALTER TABLE [dbo].[Transportation] CHECK CONSTRAINT [FK_Transportation_Car]
GO
ALTER TABLE [dbo].[Transportation]  WITH CHECK ADD  CONSTRAINT [FK_Transportation_Driver] FOREIGN KEY([DriverPrimaryId])
REFERENCES [dbo].[Driver] ([Id])
GO
ALTER TABLE [dbo].[Transportation] CHECK CONSTRAINT [FK_Transportation_Driver]
GO
ALTER TABLE [dbo].[Transportation]  WITH CHECK ADD  CONSTRAINT [FK_Transportation_Driver1] FOREIGN KEY([DriverSecondaryId])
REFERENCES [dbo].[Driver] ([Id])
GO
ALTER TABLE [dbo].[Transportation] CHECK CONSTRAINT [FK_Transportation_Driver1]
GO
