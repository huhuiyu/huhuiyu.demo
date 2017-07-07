use mysql;

drop database if exists JavaGradleDemo;

create database JavaGradleDemo default charset utf8 collate utf8_general_ci;

use JavaGradleDemo;

create table TblDept
(
	did integer auto_increment primary key not null,
	dname varchar(100) unique not null,
	createDate timestamp not null default current_timestamp
);

insert into TblDept(dname) values('test');

select * from TblDept;

create table TblEmployee
(
	eid integer auto_increment primary key not null,
	ename varchar(100) not null,
	did integer not null,
	foreign key (did) references TblDept(did)
);

select * from TblEmployee
