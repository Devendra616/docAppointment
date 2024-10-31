import express from "express";
import {
  getDoctorsList,
  loginDoctor,
  getDoctorAppointments,
  appointmentCompleted,
  cancelAppointment,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", getDoctorsList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, getDoctorAppointments);
doctorRouter.post("/complete-appointment", authDoctor, appointmentCompleted);
doctorRouter.post("/cancel-appointment", authDoctor, cancelAppointment);

export default doctorRouter;
