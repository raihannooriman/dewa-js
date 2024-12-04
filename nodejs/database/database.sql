-- postgresql://postgres:password@localhost:5432/postgres

CREATE TABLE sample (
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
)

SELECT * FROM sample;

CREATE TABLE customers(
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT customers_email_unique UNIQUE (email),
  CONSTRAINT customers_phone_unique UNIQUE (phone)
)

SELECT * FROM customers;
SELECT * FROM customers WHERE name = 'Han'

CREATE TABLE products(
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  price INTEGER NOT NULL,
  stock INTEGER NOT NULL,
  category VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
)
SELECT & FROM products;

INSERT INTO products (id, name, price, stock, category) 
  VALUES ('P0001', 'A', 1000, 100, 'K1'),
  ('P0002', 'B', 2000, 200, 'K1'), 
  ('P0003', 'C', 3000, 300, 'K1'), 
  ('P0004', 'D', 4000, 400, 'K1'),
  ('P0005', 'E', 5000, 500, 'K1')

INSERT INTO products (id, name, price, stock, category) 
  VALUES ('P0006', 'A', 1000, 100, 'K2'),
  ('P0007', 'B', 2000, 200, 'K2'), 
  ('P0008', 'C', 3000, 300, 'K2'), 
  ('P0009', 'D', 4000, 400, 'K2'),
  ('P0010', 'E', 5000, 500, 'K2')

CREATE TABLE categories(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
)

CREATE TABLE wallet(
  id VARCHAR(100) NOT NULL,
  balance INTEGER NOT NULL,
  customer_id VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers(id),
  CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
)

CREATE TABLE comments(
  id SERIAL INTEGER NOT NULL,
  customer_id VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers(id)
)

SELECT * FROM comments;


INSERT INTO comments(customer_id, title, description)
VALUES('han', 'Comment 1', 'Description 1'),
('han', 'Comment 2', 'Description 2'),
('joko', 'Comment 1', 'Description 1'),
('joko', 'Comment 2', 'Description 2')

CREATE TABLE likes(
  customer_id VARCHAR(100) NOT NULL,
  product_id VARCHAR(100) NOT NULL,
  PRIMARY KEY (customer_id, product_id),
  CONSTRAINT likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers(id),
  CONSTRAINT likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products(id)
)

SELECT * FROM likes;


-- implicit relation many to many
CREATE TABLE _loves(
  A VARCHAR(100) NOT NULL,
  B VARCHAR(100) NOT NULL,
  PRIMARY KEY (A, B),
  CONSTRAINT customer_loves_fk FOREIGN KEY (A) REFERENCES customers(id),
  CONSTRAINT product_loves_fk FOREIGN KEY (B) REFERENCES products(id)
)



-- migrate

CREATE DATABASE belajar_nodejs_prisma;