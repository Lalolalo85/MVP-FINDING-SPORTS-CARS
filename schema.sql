DROP DATABASE IF EXISTS review;

CREATE DATABASE review;

USE review;

CREATE TABLE cars (
  id int NOT NULL AUTO_INCREMENT,
  model integer NOT NULL,make
  make varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/* Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 *  to create the database and the tables. */

 INSERT INTO cars (model, make) VALUES ("Escort", "Ford");
 INSERT INTO cars (model, make) VALUES ("Supra", "Toyota");
 INSERT INTO cars (model, make) VALUES ("Silverado", "Chevy");
 INSERT INTO cars (model, make) VALUES ("Civic", "Honda");
