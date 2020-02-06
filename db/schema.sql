DROP DATABASE IF EXISTS travelfinder_db;
CREATE DATABASE travelfinder_db;
USE travelfinder_db;


CREATE TABLE travel (
id INT AUTO_INCREMENT NOT NULL,
city_name VARCHAR(250),
hotel_cost INT,
transportation_cost INT,
food_cost INT,
alcohol_cost INT,
PRIMARY KEY (id)
);


