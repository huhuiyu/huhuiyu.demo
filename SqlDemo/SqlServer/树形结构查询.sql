use master
go
if(DB_ID('TreeDemo') is not null)
	drop database TreeDemo
go
create database TreeDemo
go
use TreeDemo
go
create table Tree
(
	tid int identity primary key not null,
	treeInfo nvarchar(20) not null,
	pid int foreign key references Tree(tid)
)
go
--顶级的
insert into Tree(treeInfo) values('L1-1')
insert into Tree(treeInfo) values('L1-2')
insert into Tree(treeInfo) values('L1-3')
go
--第二级的
insert into Tree(treeInfo,pid) values('L2-1',1)
insert into Tree(treeInfo,pid) values('L2-2',1)
insert into Tree(treeInfo,pid) values('L2-3',2)
insert into Tree(treeInfo,pid) values('L2-4',3)
go

--第三级的
insert into Tree(treeInfo,pid) values('L3-1',5)
insert into Tree(treeInfo,pid) values('L3-2',6)

--第四级的
insert into Tree(treeInfo,pid) values('L4-1',8)
go

select * from Tree
go

--查询tid是2或者是1记录以及下面所有树枝
with MyTree as
(
	select tid,treeInfo,pid from Tree
	where tid=2 or tid=1
	union all
	select t.tid,t.treeInfo,t.pid from MyTree
	inner join Tree t on t.pid=MyTree.tid
)
select tid,treeInfo,pid from MyTree
go

--查询tid是9的上级树
with MyTree as
(
	select tid,treeInfo,pid from Tree
	where tid=9
	union all
	select t.tid,t.treeInfo,t.pid from MyTree
	inner join Tree t on t.tid=MyTree.pid
)
select tid,treeInfo,pid from MyTree
go


