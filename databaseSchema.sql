-- create database student_management;

-- create table login (
-- id int auto_increment primary key,
-- user_id varchar(256),
-- password varchar(256),
-- token varchar(256),
-- created_at timestamp, 
-- updated_at timestamp,
-- deleted_at timestamp
-- );

-- create table department(
-- id int auto_increment primary key,
-- name varchar(256),
-- info varchar(256),
-- created_at timestamp, 
-- updated_at timestamp,
-- deleted_at timestamp
-- );

-- create table users (
-- id int auto_increment primary key,
-- f_name varchar(256),
-- l_name varchar(256),
-- user_id int not null,
-- dept_id int not null,
-- created_at timestamp, 
-- updated_at timestamp,
-- deleted_at timestamp,
-- foreign key (user_id) references login(id),
-- foreign key (dept_id) references department(id)
-- );



