DROP DATABASE IF EXISTS travelfinder_db;
CREATE DATABASE travelfinder_db;
USE travelfinder_db;


CREATE TABLE travel (
id INT AUTO_INCREMENT NOT NULL,
city_name VARCHAR(250),
trip_cost INT,
PRIMARY KEY (id)
);