-- Criação da tabela machines
CREATE TABLE machines (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NULL
);

-- Criação da tabela machine_efficiency
CREATE TABLE machine_efficiency (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  temperature NUMERIC,
  efficiency NUMERIC,
  machine_id INT,
  CONSTRAINT fk_machine
    FOREIGN KEY (machine_id)
    REFERENCES machines(id)
);
