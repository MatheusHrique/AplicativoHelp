CREATE DATABASE helpp;

-- Tabela Usuarios
CREATE TABLE Usuarios(
ID INT AUTO_INCREMENT PRIMARY KEY,
Nome VARCHAR(100) NOT NULL,
Email VARCHAR(100) NOT NULL UNIQUE,
Senha VARCHAR(50) NOT NULL,
TipoUsuario ENUM('Cliente', 'Prestador') NOT NULL,
Telefone VARCHAR(15),
Endereco VARCHAR(150),
Cidade VARCHAR(100),
Estado VARCHAR(50),
CEP VARCHAR(18),
FotoPerfil VARCHAR(100) DEFAULT 'default.jpg',
DataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela PrestadoresDeServico
CREATE TABLE PrestadoresDeServico(
ID INT AUTO_INCREMENT PRIMARY KEY,
Profissao VARCHAR(100) NOT NULL,
Descricao TEXT,
DisponibilidadeDia DATE,
DisponibilidadeHora TIME,
Telefone VARCHAR(20),
Endereco VARCHAR(100),
Cidade VARCHAR(100),
Estado VARCHAR(50),
CEP VARCHAR(18),
FotoPerfil VARCHAR(100) DEFAULT 'default.jpg',
DataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela ServicosOferecidos
CREATE TABLE ServicosOferecidos(
ID INT AUTO_INCREMENT PRIMARY KEY,
ID_Prestador INT NOT NULL,
ID_Usuarios INT NOT NULL,
Localidade VARCHAR(100) NOT NULL,
Tipo_Servico VARCHAR(100) NOT NULL,
Orcamento DECIMAL(10, 2), -- Orçamento feito a partir de tal serviço atraves do prestador


FOREIGN KEY (ID_Prestador) REFERENCES PrestadoresDeServico(ID),
FOREIGN KEY (ID_Usuarios) REFERENCES Usuarios(ID)
);

-- Tabela Agendamentos
CREATE TABLE Agendamentos(
ID INT AUTO_INCREMENT PRIMARY KEY,
ID_Cliente INT NOT NULL,
ID_Prestador INT NOT NULL,
Data_Hora_Agendamento DATETIME NOT NULL,
Status ENUM('Agendado', 'Em_Andamento', 'Concluído', 'Cancelado') NOT NULL,
ComentariosNotas TEXT,

FOREIGN KEY (ID_Cliente) REFERENCES Usuarios(ID),
FOREIGN KEY (ID_Prestador) REFERENCES PrestadoresDeServico(ID)
);

-- Tabela Avaliacoes
CREATE TABLE Avaliacoes(
ID INT AUTO_INCREMENT PRIMARY KEY,
ID_Prestador INT NOT NULL,
ID_Cliente INT NOT NULL,
Avaliacao_Media DECIMAL(3, 2),
Comentario TEXT,
TipoUsuario ENUM('Cliente', 'Prestador') NOT NULL, -- Avaliação para determinado usuario

FOREIGN KEY (ID_Prestador) REFERENCES PrestadoresDeServico(ID),
FOREIGN KEY (ID_Cliente) REFERENCES Usuarios(ID)
);

