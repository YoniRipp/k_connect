CREATE DATABASE IF NOT EXISTS itemdb;
USE itemdb;

DROP TABLE IF EXISTS items_volumes;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL UNIQUE,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE items_volumes (
    volume_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    volume_description VARCHAR(255),
    price DECIMAL(10, 2),
    duration_months INT,
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);
