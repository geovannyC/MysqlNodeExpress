CREATE DATABASE miBase;
CREATE TABLE books(
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   author VARCHAR(255) NOT NULL
)
insert into books values (,'La leyenda del Dragon','Pepito')