


CREATE DATABASE IF NOT EXISTS `numeros_perfectos_db` ;
USE `numeros_perfectos_db`;


CREATE TABLE IF NOT EXISTS `perfect_numbers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numbers` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

