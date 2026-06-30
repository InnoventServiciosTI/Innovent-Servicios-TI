-- Sistema de Gestión de Tickets de Soporte Técnico (TI)

CREATE DATABASE IF NOT EXISTS soporte_tickets;
USE soporte_tickets;

-- Tabla: usuarios
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    contraseña VARCHAR(255),
    rol ENUM('cliente','tecnico','admin'),
    telefono VARCHAR(20),
    estado BOOLEAN DEFAULT TRUE,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: categorias
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT
);

-- Tabla: prioridades
CREATE TABLE prioridades (
    id_prioridad INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    nivel INT
);

-- Tabla: estados_ticket
CREATE TABLE estados_ticket (
    id_estado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50)
);

-- Tabla: tickets
CREATE TABLE tickets (
    id_ticket INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    descripcion TEXT,
    id_usuario INT,
    id_tecnico INT NULL,
    id_categoria INT,
    id_prioridad INT,
    id_estado INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion DATETIME,

    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_tecnico) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
    FOREIGN KEY (id_prioridad) REFERENCES prioridades(id_prioridad),
    FOREIGN KEY (id_estado) REFERENCES estados_ticket(id_estado)
);

-- Tabla: comentarios_ticket
CREATE TABLE comentarios_ticket (
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    id_ticket INT,
    id_usuario INT,
    comentario TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Tabla: adjuntos
CREATE TABLE adjuntos (
    id_adjunto INT AUTO_INCREMENT PRIMARY KEY,
    id_ticket INT,
    nombre_archivo VARCHAR(255),
    ruta_archivo VARCHAR(255),
    fecha_subida DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket)
);

-- Tabla: historial_estados
CREATE TABLE historial_estados (
    id_historial INT AUTO_INCREMENT PRIMARY KEY,
    id_ticket INT,
    id_estado INT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket),
    FOREIGN KEY (id_estado) REFERENCES estados_ticket(id_estado)
);

-- Índices
CREATE INDEX idx_estado ON tickets(id_estado);
CREATE INDEX idx_tecnico ON tickets(id_tecnico);

-- Datos iniciales
INSERT INTO estados_ticket (nombre) VALUES ('Abierto'), ('En proceso'), ('Resuelto'), ('Cerrado');

INSERT INTO prioridades (nombre, nivel) VALUES 
('Baja',1), ('Media',2), ('Alta',3), ('Crítica',4);
