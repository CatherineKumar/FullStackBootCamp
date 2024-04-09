/*The schema includes tables for users, user sessions, product categories, products, shopping carts, cart products, shipping details, and orders.

The user table stores information about registered users. The usersession table is used to manage user sessions. The category table stores information about product categories. The product table stores information about products, including their price, stock quantity, and image. The cart table stores information about shopping carts created by users. The cart_products table stores information about the products added to each cart. The shippingDetails table stores information about the shipping address, email, and phone number. Finally, the order table stores information about each order, including the user who placed the order, the shipping details, the order total price, and the order status.

Each table also includes some additional columns, such as createdTs and updatedTs, which are used to store timestamps of when each record was created and last updated. Additionally, each table has an isActive column, which is used to mark records as inactive rather than deleting them outright. This allows for data to be retained for future reference without cluttering the database with unnecessary data.*/

/*Create database command*/
CREATE DATABASE `e_commerce`;

/*Select the newly created database*/
USE `e_commerce`;

/*Create table command for user table*/
CREATE TABLE `user` (
  `id` int NOT NULL,
  `userName` varchar(50) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `emailId` varchar(100) NOT NULL,
  `phoneNo` int NOT NULL,
  `password` varchar(50) NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Create table command for usersession table*/
CREATE TABLE `usersession` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `sessionToken` varchar(200) NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Create table command for category table*/
CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Create table command for product table*/
CREATE TABLE `product` (
  `id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantityInStock` int NOT NULL,
  `image` varchar(200) NOT NULL,
  `categoryId` int NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Create table command for cart table*/
CREATE TABLE `cart` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `orderTotalPrice` decimal(10,2) NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_cart` (`userId`, `isActive`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Create table command for cart_products table*/
CREATE TABLE `cart_products` (
  `id` int NOT NULL,
  `cartId` int NOT NULL,
  `productId` int NOT NULL,
  `productPrice` decimal(10,2) NOT NULL,
  `unitsInCart` int NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Create table command for order table*/
CREATE TABLE `order` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `orderTotalPrice` decimal(10,2) NOT NULL,
  `shippingDetailsId` int NOT NULL,
  `orderStatus` varchar(50) NOT NULL DEFAULT 'PROCESSING',
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Create table command for order_products table*/
CREATE TABLE `order_products` (
  `id` int NOT NULL,
  `orderId` int NOT NULL,
  `productId` int NOT NULL,
  `productPrice` decimal(10,2) NOT NULL,
  `unitsPruchased` int NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Create table command for shippingDetails table*/
CREATE TABLE `shippingDetails` (
  `id` int NOT NULL,
  `shippingAddress` varchar(200) NOT NULL,
  `emailId` varchar(50) NOT NULL,
  `phoneNo` int NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  `createdTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedTs` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
