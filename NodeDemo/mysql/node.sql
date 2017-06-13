use mysql;

drop database if exists NodeDemo;

create database NodeDemo default charset utf8 collate utf8_general_ci;

use NodeDemo;

create table TblTest
(
	tid integer auto_increment primary key not null,
	tinfo varchar(100) unique not null,
	modifyDate timestamp not null on update current_timestamp default current_timestamp
);

insert into TblTest(tinfo) values('默认测试数据');

update TblTest set tinfo='默认测试数据修改' where tid=1;

select * from TblTest;

