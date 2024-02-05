CREATE DATABASE ini8;

USE ini8;

CREATE TABLE `users` (
	`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50),
    `email` VARCHAR(30),
    `password` TEXT,
	`dob` DATE
);

/*
SELECT * FROM `users`;
TRUNCATE `users`;
*/
