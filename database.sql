CREATE DATABASE shopDB;
USE shopDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price INT
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total INT,
    status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    amount INT,
    status VARCHAR(50),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);