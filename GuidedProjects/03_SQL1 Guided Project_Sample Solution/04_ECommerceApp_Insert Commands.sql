/*SQL Query to select the database for performing operations*/
use `e_commerce`;

/*Insert Statement Template for inserting data into user table*/
    -- INSERT INTO `e_commerce`.`user`
    -- (`id`,
    -- `userName`,
    -- `fullName`,
    -- `emailId`,
    -- `phoneNo`,
    -- `password`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{userName: }>,
    -- <{fullName: }>,
    -- <{emailId: }>,
    -- <{phoneNo: }>,
    -- <{password: }>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `user` (`id`, `userName`, `fullName`, `emailId`, `phoneNo`, `password`, `isActive`)
VALUES
  (1, 'john.doe', 'John Doe', 'john.doe@example.com', 1234567890, 'password123', 1),
  (2, 'jane.doe', 'Jane Doe', 'jane.doe@example.com', 0987654321, 'password456', 1),
  (3, 'bob.smith', 'Bob Smith', 'bob.smith@example.com', 5551234567, 'password789', 1);

/*Insert Statement Template for inserting data into usersession table*/
    -- INSERT INTO `e_commerce`.`usersession`
    -- (`id`,
    -- `userId`,
    -- `sessionToken`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{userId: }>,
    -- <{sessionToken: }>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `usersession` (`id`, `userId`, `sessionToken`, `isActive`)
VALUES
  (1, 1, 'sessionToken123', 1),
  (2, 2, 'sessionToken456', 1),
  (3, 3, 'sessionToken789', 1);

/*Insert Statement Template for inserting data into category table*/
    -- INSERT INTO `e_commerce`.`category`
    -- (`id`,
    -- `name`,
    -- `description`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{name: }>,
    -- <{description: }>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `category` (`id`, `name`, `description`, `isActive`)
VALUES
  (1, 'Electronics', 'Electronic items and gadgets', 1),
  (2, 'Books', 'Fiction and non-fiction books', 1),
  (3, 'Clothing', 'Men and women clothing', 1);

/*Insert Statement Template for inserting data into product table*/
    -- INSERT INTO `e_commerce`.`product`
    -- (`id`,
    -- `name`,
    -- `description`,
    -- `price`,
    -- `quantityInStock`,
    -- `image`,
    -- `categoryId`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{name: }>,
    -- <{description: }>,
    -- <{price: }>,
    -- <{quantityInStock: }>,
    -- <{image: }>,
    -- <{categoryId: }>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `product` (`id`, `name`, `description`, `price`, `quantityInStock`, `image`, `categoryId`, `isActive`)
VALUES
  (1, 'iPhone 12', 'Apple iPhone 12 with 128 GB storage', 799, 50, 'https://example.com/iphone12.jpg', 1, 1),
  (2, 'Samsung Galaxy S21', 'Samsung Galaxy S21 with 256 GB storage', 899, 25, 'https://example.com/galaxys21.jpg', 1, 1),
  (3, 'Harry Potter and the Sorcerer\'s Stone', 'First book in the Harry Potter series', 10, 100, 'https://example.com/harrypotter1.jpg', 2, 1),
  (4, 'The Catcher in the Rye', 'Classic novel by J.D. Salinger', 8, 75, 'https://example.com/catcherintherye.jpg', 2, 1),
  (5, 'Men\'s T-Shirt', 'Cotton T-Shirt for men', 15, 200, 'https://example.com/tshirt.jpg', 3, 1),
  (6, 'Women\'s Dress', 'Floral dress for women', 30, 100, 'https://example.com/dress.jpg', 3, 1);

/*Insert Statement Template for inserting data into cart table*/
    -- INSERT INTO `e_commerce`.`cart`
    -- (`id`,
    -- `userId`,
    -- `orderTotalPrice`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{userId: }>,
    -- <{orderTotalPrice: }>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `cart` (`id`, `userId`, `orderTotalPrice`, `isActive`)
VALUES
  (1, 1, 1500, 1),
  (2, 2, 2500, 1),
  (3, 1, 800, 1);

/*Insert Statement Template for inserting data into cart_products table*/
    -- INSERT INTO `e_commerce`.`cart_products`
    -- (`id`,
    -- `cartId`,
    -- `productId`,
    -- `productPrice`,
    -- `unitsInCart`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{cartId: }>,
    -- <{productId: }>,
    -- <{productPrice: }>,
    -- <{unitsInCart: }>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `cart_products` (`id`, `cartId`, `productId`, `productPrice`, `unitsInCart`)
VALUES
  (1, 1, 2, 250, 2),
  (2, 2, 3, 500, 1),
  (3, 1, 1, 700, 1);

/*Insert Statement Template for inserting data into shippingDetails table*/
    -- INSERT INTO `e_commerce`.`shippingDetails`
    -- (`id`,
    -- `shippingAddress`,
    -- `emailId`,
    -- `phoneNo`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{shippingAddress: }>,
    -- <{emailId: }>,
    -- <{phoneNo: }>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `shippingDetails` (`id`, `shippingAddress`, `emailId`, `phoneNo`)
VALUES
  (1, '123 Main St, Anytown USA', 'johndoe@example.com', 5551234),
  (2, '456 Oak St, Anytown USA', 'janedoe@example.com', 5555678),
  (3, '789 Elm St, Anytown USA', 'bob@example.com', 5559012);

/*Insert Statement Template for inserting data into order table*/
    -- INSERT INTO `e_commerce`.`order`
    -- (`id`,
    -- `userId`,
    -- `orderTotalPrice`,
    -- `shippingDetailsId`,
    -- `orderStatus`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{userId: }>,
    -- <{orderTotalPrice: }>,
    -- <{shippingDetailsId: }>,
    -- <{orderStatus: PROCESSING}>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `order` (`id`, `userId`, `orderTotalPrice`, `shippingDetailsId`, `orderStatus`, `isActive`, `createdTs`, `updatedTs`) VALUES 
(1, 1, 100, 1, 'PROCESSING', 1, '2022-05-10 10:00:00', '2022-05-10 10:00:00'),
(2, 2, 50, 2, 'SHIPPED', 1, '2022-05-09 12:00:00', '2022-05-09 12:00:00'),
(3, 3, 200, 3, 'DELIVERED', 1, '2022-05-08 14:00:00', '2022-05-08 14:00:00');

/*Insert Statement Template for inserting data into order_products table*/
    -- INSERT INTO `e_commerce`.`order_products`
    -- (`id`,
    -- `orderId`,
    -- `productId`,
    -- `productPrice`,
    -- `unitsPruchased`,
    -- `isActive`,
    -- `createdTs`,
    -- `updatedTs`)
    -- VALUES
    -- (<{id: }>,
    -- <{orderId: }>,
    -- <{productId: }>,
    -- <{productPrice: }>,
    -- <{unitsPruchased: }>,
    -- <{isActive: 1}>,
    -- <{createdTs: CURRENT_TIMESTAMP}>,
    -- <{updatedTs: CURRENT_TIMESTAMP}>);

/*Examples*/
INSERT INTO `order_products` (`id`, `orderId`, `productId`, `productPrice`, `unitsPruchased`, `isActive`, `createdTs`, `updatedTs`) VALUES 
(1, 1, 1, 50, 2, 1, '2023-05-11 10:00:00', '2023-05-11 10:00:00'),
(2, 1, 2, 75, 1, 1, '2023-05-11 10:00:00', '2023-05-11 10:00:00'),
(3, 2, 3, 100, 3, 1, '2023-05-11 10:00:00', '2023-05-11 10:00:00'),
(4, 3, 4, 150, 2, 1, '2023-05-11 10:00:00', '2023-05-11 10:00:00'),
(5, 3, 5, 50, 1, 1, '2023-05-11 10:00:00', '2023-05-11 10:00:00');