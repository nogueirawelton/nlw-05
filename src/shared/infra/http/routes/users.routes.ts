import { Router } from "express";
import { UserController } from "../../../../controllers/UserController";

export const usersRoutes = Router();

const createUserController = new UserController();

usersRoutes.post("/",createUserController.create);