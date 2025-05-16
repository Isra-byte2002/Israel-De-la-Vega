CREATE DATABASE TiendaDB;

USE TiendaDB;

CREATE TABLE Clientes (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Correo VARCHAR(100)
);

INSERT INTO Clientes (ID, Nombre, Correo) VALUES (1, 'Juan Pérez', 'juan@correo.com');
INSERT INTO Clientes (ID, Nombre, Correo) VALUES (2, 'Ana Gómez', 'correo.com');
INSERT INTO Clientes (ID, Nombre, Correo) VALUES (3, 'Carlos Ruiz', 'carlos@correo.com');
