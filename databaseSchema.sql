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



CREATE TABLE login(
    id SERIAL NOT NULL,
    user_id varchar(256),
    password varchar(256),
    user_profile varchar(500),
    email varchar(255) NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    PRIMARY KEY(id)
);
CREATE UNIQUE INDEX login_email_key ON login USING btree ("email");


-- Generated by the database client.
CREATE TABLE department(
    id SERIAL NOT NULL,
    name varchar(256),
    info varchar(256),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    PRIMARY KEY(id)
);

-- Generated by the database client.
CREATE TABLE users(
    id SERIAL NOT NULL,
    f_name varchar(256),
    l_name varchar(256),
    user_id integer NOT NULL,
    dept_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    PRIMARY KEY(id),
    CONSTRAINT users_user_id_fkey FOREIGN key(user_id) REFERENCES login(id),
    CONSTRAINT users_dept_id_fkey FOREIGN key(dept_id) REFERENCES department(id)
);