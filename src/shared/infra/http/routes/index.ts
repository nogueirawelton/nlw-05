import { Router } from "express";
import { messagesRoutes } from "./messages.routes";
import { usersRoutes } from "./users.routes";

export const routes = Router();

routes.use("/user", usersRoutes);
routes.use("/message", messagesRoutes);