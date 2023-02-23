create database user_service_db;
use user_service_db;
create table users (id integer primary key auto_increment, firstname varchar(20), lastname varchar(20), email varchar(50), password varchar(100))