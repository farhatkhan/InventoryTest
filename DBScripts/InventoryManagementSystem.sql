USE [master]
GO
/****** Object:  Database [InventoryManagementSysytem]    Script Date: 5/8/2021 10:27:21 AM ******/
CREATE DATABASE [InventoryManagementSysytem]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'InventoryManagementSysytem', FILENAME = N'D:\Tests\DB\InventoryManagementSysytem.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'InventoryManagementSysytem_log', FILENAME = N'D:\Tests\DB\InventoryManagementSysytem_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [InventoryManagementSysytem] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [InventoryManagementSysytem].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [InventoryManagementSysytem] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET ARITHABORT OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [InventoryManagementSysytem] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [InventoryManagementSysytem] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET  DISABLE_BROKER 
GO
ALTER DATABASE [InventoryManagementSysytem] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [InventoryManagementSysytem] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [InventoryManagementSysytem] SET  MULTI_USER 
GO
ALTER DATABASE [InventoryManagementSysytem] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [InventoryManagementSysytem] SET DB_CHAINING OFF 
GO
ALTER DATABASE [InventoryManagementSysytem] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [InventoryManagementSysytem] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [InventoryManagementSysytem] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [InventoryManagementSysytem] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [InventoryManagementSysytem] SET QUERY_STORE = OFF
GO
USE [InventoryManagementSysytem]
GO
/****** Object:  Table [dbo].[inventory]    Script Date: 5/8/2021 10:27:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[inventory](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NULL,
	[description] [nvarchar](max) NULL,
	[price] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[inventory] ON 

INSERT [dbo].[inventory] ([id], [name], [description], [price]) VALUES (2, N'oil', N'oil for cooking', 200)
INSERT [dbo].[inventory] ([id], [name], [description], [price]) VALUES (4, N'sugar', N'brown sugar', 120)
SET IDENTITY_INSERT [dbo].[inventory] OFF
GO
USE [master]
GO
ALTER DATABASE [InventoryManagementSysytem] SET  READ_WRITE 
GO
