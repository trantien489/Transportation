USE [gias9367_transportation]
GO
ALTER TABLE [dbo].[Transportation] DROP CONSTRAINT [FK_Transportation_Driver1]
GO
ALTER TABLE [dbo].[Transportation] DROP CONSTRAINT [FK_Transportation_Driver]
GO
ALTER TABLE [dbo].[Transportation] DROP CONSTRAINT [FK_Transportation_Car]
GO
ALTER TABLE [dbo].[Price] DROP CONSTRAINT [FK_Price_Distance]
GO
ALTER TABLE [dbo].[Price] DROP CONSTRAINT [FK_Price_Capacity]
GO
ALTER TABLE [dbo].[Driver] DROP CONSTRAINT [FK_Driver_DriverType]
GO
ALTER TABLE [dbo].[Car] DROP CONSTRAINT [FK_Car_Capacity]
GO
ALTER TABLE [dbo].[AspNetUserTokens] DROP CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles] DROP CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles] DROP CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserLogins] DROP CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserClaims] DROP CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetRoleClaims] DROP CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
/****** Object:  Table [dbo].[Transportation]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[Transportation]
GO
/****** Object:  Table [dbo].[Price]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[Price]
GO
/****** Object:  Table [dbo].[DriverType]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[DriverType]
GO
/****** Object:  Table [dbo].[Driver]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[Driver]
GO
/****** Object:  Table [dbo].[Distance]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[Distance]
GO
/****** Object:  Table [dbo].[Company]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[Company]
GO
/****** Object:  Table [dbo].[Car]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[Car]
GO
/****** Object:  Table [dbo].[Capacity]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[Capacity]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[AspNetUserTokens]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[AspNetUsers]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[AspNetUserRoles]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[AspNetUserLogins]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[AspNetUserClaims]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[AspNetRoles]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[AspNetRoleClaims]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 5/12/2019 10:58:00 PM ******/
DROP TABLE [dbo].[__EFMigrationsHistory]
GO
