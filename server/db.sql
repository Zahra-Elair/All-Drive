-- drop database allDrive;
-- create database allDrive;

-- use allDrive;

-- create table user (
-- 	id int primary key auto_increment,
-- 	username varchar(255) not null unique,
-- 	email varchar(255) not null unique,
-- 	password varchar(255) not null
-- );

-- create table drive (
-- 	id int primary key auto_increment,
-- 	name varchar(255) not null -- e.g: Google Drive, One Drive, ...
-- );

-- insert into drive (id, name) values
-- 				(1, "Google Drive"),
-- 				(2, "Microsoft One Drive"),
-- 				(3, "Mega"),
-- 				(4, "Dropbox");

-- create table userDrive (
-- 	userId int not null,
-- 	driveId int not null,
-- 	token varchar(255), -- auth1.0 token length: 55, auth2.0: 255 characters
--     primary key (userId, driveId),
--     foreign key (userId) references user (id),
--     foreign key (driveId) references drive (id)
-- );

-- file coming from a drive
/*
	{
		filename,
		driveId,
		userId,
		size
	}
*/