import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";

import path from "path";

import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "../../container";

import express, { NextFunction, Request, Response } from "express";

import { routes } from "./routes"; 

const app = express();

export const http = createServer(app);
export const io = new Server(http);

app.use(express.static(path.join(__dirname, "..", "..", "..", "..", "public")));
app.set("views", path.join(__dirname, "..", "..", "..", "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html")
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html")
});

app.use(express.json());
app.use(routes);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    });
  }
  return response.status(500).json({
    message: "Internal Server Error!"
  })
})