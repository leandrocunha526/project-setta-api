import { Request, Response } from 'express';
import { createMachine, deleteMachine, getMachineById, updateMachine, updateMeasurement } from '../services/databaseService';

export async function addMachineController(req: Request, res: Response) {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        const machine = await createMachine(name);
        res.json({ machine });
    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.log(error);
    }
}

export async function addMeasurementToMachineController(req: Request, res: Response) {
    try {
        const {  machine_id } = req.body;
        if (!machine_id) {
            return res.status(400).json({ error: 'Machine ID is required' });
        }
        await updateMeasurement(machine_id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.error(error);
    }
}

export async function deleteMachineController(req: Request, res: Response) {
    try {
        const { machine_id } = req.params;
        await deleteMachine(machine_id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.error(error);
    }
}

export async function getMachineByIdController(req: Request, res: Response) {
    try {
        const { machine_id } = req.params;
        const machine = await getMachineById(machine_id);
        res.json(machine);
    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.error(error);
    }
}

export async function updateMachineController(req: Request, res: Response) {
    try {
        const { name } = req.body;
        const { machine_id } = req.params;
        if (!name) {
            return res.status(400).json({ error: 'Name and Machine ID are required' });
        }
        await updateMachine(name, machine_id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.error(error);
    }
}
