show databases;
use mydatabase;
select * from users;
drop table users;
alter table form modify column gender varchar(50);
drop database mydatabase;
SHOW CREATE TABLE form; 
SELECT STR_TO_DATE("August 10 2017", "%M %d %Y");
create database timeDB;
use timeDB;
create table t (dob date);
alter table form modify column dob varchar(25);
alter table form modify column issueDate varchar(25);
show tables;
use FORM_DATA;
show tables;
select * from form;
use testDB;
CREATE TABLE stud (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY (id));
show tables;
select * from stud;
describe testDB.stud;
insert into stud (name) values ('Jordan');
describe FORM_DATA.form;
alter table form modify column srNo INT(5), modify column aadhar int(12), modify column mobile int(10), modify column parentsMobile int(10);
alter table form modify column srNo INT, modify column aadhar BIGINT, modify column mobile BIGINT, modify column parentsMobile BIGINT;


