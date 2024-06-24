import { Request, Response } from 'express';
import { getTemperature } from '../services/temperatureService';
import { calculateEfficiency } from '../models/efficiencyCalculator';
import { deleteMeasurement, getMachineEfficiency, getMachineEfficiencyById, saveData } from '../services/databaseService';

export async function temperatureController(req: Request, res: Response) {
    try {
        const temperature = await getTemperature();
        const efficiency = calculateEfficiency(temperature);
        const timestamp = new Date().toISOString();

        await saveData(temperature, efficiency, timestamp);

        res.json({ temperature, efficiency, timestamp });

    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.error(error)
    }
}

export async function getMachineEfficiencyController(req: Request, res: Response) {
    try {
        const result = await getMachineEfficiency();

        res.json(result);

    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.error(error)
    }
}

export async function getMachineEfficiencyByIdController(req: Request, res: Response) {
    try {
        const { machine_id } = req.params;
        const result = await getMachineEfficiencyById(machine_id);

        res.json(result);

    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.error(error)
    }
}

export async function deleteMachineEfficiencyController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await deleteMeasurement(id);

        res.json({ id, success: true });

    } catch (error) {
        res.status(500).json({ error: 'Error 500: Internal Server Error' });
        console.error(error)
    }
}
