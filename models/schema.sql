-- Build Your Tables Here --


-- ROLE TABLE. 

-- CREATE TABLE roles (
--     id SERIAL NOT NULL,
--     role VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

------------------------------------------------
-- Users TABLE. 


-- CREATE TABLE users(
--     id SERIAL NOT NULL,
--     firstName VARCHAR(255),
--     lastName VARCHAR(255),
--     age INT,
--     country VARCHAR(255),
--     email VARCHAR(255) UNIQUE,
--     password VARCHAR(255),
--     role_id INT,
--     FOREIGN KEY (role_id) REFERENCES roles(id),
--     is_deleted SMALLINT DEFAULT 0,
--     PRIMARY KEY (id)
-- );

-------------------------------------------------
-- articles TABLE. 

-- CREATE TABLE articles (
--     id SERIAL NOT NULL,
--     title VARCHAR(255),
--     description TEXT,
--     author_id INT,
--     FOREIGN KEY (author_id) REFERENCES users(id),
--     is_deleted SMALLINT DEFAULT 0,
--     PRIMARY KEY (id)
-- );

-------------------------------------------------
-- comments  TABLE.

-- CREATE TABLE comments(
--     id SERIAL NOT NULL,
--     comment TEXT,
--     article_id INT,
--     FOREIGN KEY (article_id) REFERENCES articles(id),
--     commenter_id INT,
--     FOREIGN KEY (commenter_id) REFERENCES users(id),
--     is_deleted SMALLINT DEFAULT 0,
--     PRIMARY KEY (id)
-- );