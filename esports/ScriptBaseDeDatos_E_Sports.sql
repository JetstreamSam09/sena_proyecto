CREATE DATABASE IF NOT EXISTS e_sports;
USE e_sports;

CREATE TABLE IF NOT EXISTS PLATAFORMA (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  marca VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO PLATAFORMA (nombre, marca) VALUES
('PlayStation 5', 'Sony'),
('Xbox Series X', 'Microsoft'),
('Nintendo Switch 2', 'Nintendo');

CREATE TABLE IF NOT EXISTS COMUNA_BARRIO (
  id INT NOT NULL AUTO_INCREMENT,
  COMUNA VARCHAR(45) NOT NULL,
  barrio VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO COMUNA_BARRIO (COMUNA, barrio) VALUES
('Comuna 1', 'Bello'),
('Comuna 2', 'El Poblado'),
('Comuna 3', 'Manrique');

CREATE TABLE IF NOT EXISTS TIPO_USUARIO (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(45),
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO TIPO_USUARIO (nombre, descripcion) VALUES
('Jugador', 'Participante normal'),
('Entrenador', 'Lider de sesiones de entrenamiento'),
('Administrador', 'Gestion de la plataforma');

CREATE TABLE IF NOT EXISTS CONSOLA (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  numero_serie VARCHAR(45) NOT NULL,
  existencia_inventario INT NOT NULL,
  dir_ip VARCHAR(45),
  dir_mac VARCHAR(45),
  PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO CONSOLA (nombre, numero_serie, existencia_inventario, dir_ip, dir_mac) VALUES
('PlayStation 5', '0001', 5, '192.168.1.1', '00-1A-2B-3C-4D-5E'),
('Xbox Series X', '0001', 3, '192.168.1.2', '00-1A-2B-3C-4D-6E'),
('Nintendo Switch', '0001', 8, '192.168.1.3', '00-1A-2B-3C-4D-7E');

CREATE TABLE IF NOT EXISTS JUEGO (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45),
  clasificiacion_ESRB VARCHAR(45),
  estudio_dev VARCHAR(45),
  plataformas_disponibles VARCHAR(45),
  numero_jugadores VARCHAR(45),
  tipo VARCHAR(45),
  existencias_inventario INT,
  PLATAFORMA_id INT NOT NULL,
  PRIMARY KEY (id, PLATAFORMA_id),
  INDEX (PLATAFORMA_id),
  FOREIGN KEY (PLATAFORMA_id) REFERENCES PLATAFORMA(id)
) ENGINE=InnoDB;

INSERT INTO JUEGO (nombre, clasificiacion_ESRB, estudio_dev, plataformas_disponibles, numero_jugadores, tipo, existencias_inventario, PLATAFORMA_id) VALUES
('FIFA 24', 'E', 'EA Sports', 'PS5,XBOX', '1-4', 'Deportes', 10, 1),
('Fortnite', 'T', 'Epic Games', 'PS5,XBOX,SWITCH', '1-100', 'Battle Royale', 20, 2),
('Mario Kart 8', 'E', 'Nintendo', 'SWITCH', '1-8', 'Carreras', 15, 3);

CREATE TABLE IF NOT EXISTS EQUIPO_JUEGO (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45),
  horas INT NOT NULL,
  nivel INT NOT NULL,
  juego VARCHAR(45),
  JUEGO_id INT NOT NULL,
  PRIMARY KEY (id, JUEGO_id),
  INDEX (JUEGO_id),
  FOREIGN KEY (JUEGO_id) REFERENCES JUEGO(id)
) ENGINE=InnoDB;

INSERT INTO EQUIPO_JUEGO (nombre, horas, nivel, juego, JUEGO_id) VALUES
('T1', 40, 5, 'FIFA 24', 1),
('T2', 120, 7, 'Fortnite', 2),
('T3', 60, 6, 'Mario Kart 8', 3);

CREATE TABLE IF NOT EXISTS USUARIO (
  id INT NOT NULL AUTO_INCREMENT,
  tipo_documento VARCHAR(45) NOT NULL,
  numero_documento VARCHAR(45) NOT NULL,
  primer_nombre VARCHAR(45) NOT NULL,
  segundo_nombre VARCHAR(45),
  primer_apellido VARCHAR(45) NOT NULL,
  segundo_apellido VARCHAR(45),
  fecha_nacimiento DATETIME NOT NULL,
  sexo VARCHAR(45),
  direccion_domicilio VARCHAR(45) NOT NULL,
  nickname VARCHAR(45),
  clave VARCHAR(45),
  acudiente INT,
  COMUNA_BARRIO_id INT NOT NULL,
  TIPO_USUARIO_id INT NOT NULL,
  EQUIPO_JUEGO_id INT NOT NULL,
  PRIMARY KEY (id, COMUNA_BARRIO_id, TIPO_USUARIO_id),
  INDEX (COMUNA_BARRIO_id),
  INDEX (TIPO_USUARIO_id),
  INDEX (EQUIPO_JUEGO_id),
  FOREIGN KEY (COMUNA_BARRIO_id) REFERENCES COMUNA_BARRIO(id),
  FOREIGN KEY (TIPO_USUARIO_id) REFERENCES TIPO_USUARIO(id),
  FOREIGN KEY (EQUIPO_JUEGO_id) REFERENCES EQUIPO_JUEGO(id)
) ENGINE=InnoDB;

INSERT INTO USUARIO (tipo_documento, numero_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, sexo, direccion_domicilio, nickname, clave, acudiente, COMUNA_BARRIO_id, TIPO_USUARIO_id, EQUIPO_JUEGO_id) VALUES
('CC', '10203040', 'Ana', 'Rebeca', 'Aguilar', 'Morelos', '2005-08-10', 'M', 'San Jaiver el socorro', 'AnaIPro', '1234', NULL, 1, 1, 1),
('TI', '99001122', 'Juan', 'Jose', 'Grajales', 'Alvarez', '2008-09-20', 'F', 'Cl 10 # 20-15', 'MJPro', 'abcd', 1, 2, 1, 2),
('CC', '11223344', 'Juan', 'Manuel', 'Rodriguez', 'Nieto del abuelo', '1995-06-18', 'M', 'Cll 35 # 22-17', 'JPAdmin', 'admin', NULL, 3, 3, 3);

CREATE TABLE IF NOT EXISTS SESION_ENTRENAMIENTO (
  id INT NOT NULL AUTO_INCREMENT,
  fecha_agenda DATETIME NOT NULL,
  hora_ini DATETIME,
  hora_fin DATETIME,
  JUEGO_id INT NOT NULL,
  arbitro INT NOT NULL,
  PRIMARY KEY (id, JUEGO_id, arbitro),
  INDEX (JUEGO_id),
  INDEX (arbitro),
  FOREIGN KEY (JUEGO_id) REFERENCES JUEGO(id),
  FOREIGN KEY (arbitro) REFERENCES USUARIO(id)
) ENGINE=InnoDB;

INSERT INTO SESION_ENTRENAMIENTO (fecha_agenda, hora_ini, hora_fin, JUEGO_id, arbitro) VALUES
('2025-11-15', '2025-01-15 14:23:43', '2025-01-15 16:00:54', 1, 3),
('2025-11-16', '2025-01-16 10:14:43', '2025-01-16 12:00:32', 2, 3);

CREATE TABLE IF NOT EXISTS LOGRO_TROFEO (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  puntos_req INT NOT NULL,
  JUEGO_id INT NOT NULL,
  PRIMARY KEY (id, JUEGO_id),
  INDEX (JUEGO_id),
  FOREIGN KEY (JUEGO_id) REFERENCES JUEGO(id)
) ENGINE=InnoDB;

INSERT INTO LOGRO_TROFEO (nombre, puntos_req, JUEGO_id) VALUES
('El man mas teso', 100, 1),
('Victoria Booyah', 150, 2),
('Campeon mas pro', 200, 3);

CREATE TABLE IF NOT EXISTS TELEFONO (
  id INT NOT NULL AUTO_INCREMENT,
  numero VARCHAR(45) NOT NULL,
  tipo VARCHAR(45) NOT NULL,
  USUARIO_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX (USUARIO_id),
  FOREIGN KEY (USUARIO_id) REFERENCES USUARIO(id)
) ENGINE=InnoDB;

INSERT INTO TELEFONO (numero, tipo, USUARIO_id) VALUES
('3116437139', 'Movil', 1),
('3207310880', 'Movil', 2),
('3206654543', 'Fijo', 3);

CREATE TABLE IF NOT EXISTS CONTROL (
  id INT NOT NULL AUTO_INCREMENT,
  numero_serie VARCHAR(45),
  tipo VARCHAR(45),
  CONSOLA_id INT NOT NULL,
  PRIMARY KEY (id),
  INDEX (CONSOLA_id),
  FOREIGN KEY (CONSOLA_id) REFERENCES CONSOLA(id)
) ENGINE=InnoDB;

INSERT INTO CONTROL (numero_serie, tipo, CONSOLA_id) VALUES
('CTRL-PS5-01', 'DualSense', 1),
('CTRL-XBOX-01', 'Xbox Wireless', 2),
('CTRL-SWITCH-01', 'Joy-Con', 3);