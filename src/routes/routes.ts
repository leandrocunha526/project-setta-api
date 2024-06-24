import { Router } from "express";
import {
  addMachineController,
  addMeasurementToMachineController,
  deleteMachineController,
  getMachineByIdController,
  updateMachineController,
} from "../controller/machineController";
import {
  temperatureController,
  getMachineEfficiencyController,
  getMachineEfficiencyByIdController,
  deleteMachineEfficiencyController,
} from "../controller/temperatureController";

const router = Router();

// machine
router.post("/machine", addMachineController);
router.get("/machine/:id", getMachineByIdController);
router.delete("machine/:id", deleteMachineController);
router.get("/updatemachine/:id", updateMachineController);

// efficiency
router.get("/temperature", temperatureController);
router.get("/efficiency", getMachineEfficiencyController);
router.put("/setmachine", addMeasurementToMachineController);
router.get("/stats/:id", getMachineEfficiencyByIdController);
router.delete("/stats/:id", deleteMachineEfficiencyController);

export default router;
