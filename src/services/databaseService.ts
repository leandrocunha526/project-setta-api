import { Pool } from "pg";

interface MachineEffiency {
    temperature: number;
    efficiency: number;
    timestamp: string;
    machine_id: number;
}

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'machine',
    password: 'admin12345',
    port: 5432
});

export async function createMachine(name: string) {
    const query = `INSERT INTO machines (name) VALUES ($1)`;
    await pool.query(query, [name]);
}

export async function saveData(temperature: number, efficiency: number, timestamp: string) {
    const query = `INSERT INTO machine_efficiency (temperature, efficiency, timestamp) VALUES ($1, $2, $3)`;
    await pool.query(query, [temperature, efficiency, timestamp]);
}

export async function getMachineEfficiency(): Promise<MachineEffiency[]> {
    const query = `SELECT * FROM machine_efficiency`;
    const result = await pool.query(query);
    return result.rows;
}

export async function updateMeasurement(machine_id: string) {
    const query = `UPDATE machine_efficiency SET machine_id = $1`;
    await pool.query(query, [machine_id]);
}

export async function deleteMeasurement(id: string) {
    const query = `DELETE FROM machine_efficiency WHERE id = $1`;
    await pool.query(query, [id]);
}

export async function getMachineEfficiencyById(machine_id: string): Promise<MachineEffiency[]> {
    const query = `SELECT * FROM machine_efficiency WHERE machine_id = $1`;
    const result = await pool.query(query, [machine_id]);
    return result.rows;
}

export async function getMachineById(machine_id: string) {
    const query = `SELECT * FROM machines WHERE id = $1`;
    const result = await pool.query(query, [machine_id]);
    return result.rows;
}

export async function deleteMachine(machine_id: string) {
    const query = `DELETE FROM machines WHERE id = $1`;
    await pool.query(query, [machine_id]);
}

export async function updateMachine(name: string, machine_id: string) {
    const query = `UPDATE machines SET name = $1 WHERE id = $2`;
    await pool.query(query, [name, machine_id]);
}
