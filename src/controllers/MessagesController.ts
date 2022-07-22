import { Request, Response } from "express";
import { container } from "tsyringe";
import { MessagesService } from "../services/MessagesService";

export class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;

    const messagesService = container.resolve(MessagesService);

    const message = await messagesService.create({
      admin_id,
      text,
      user_id 
    });

    return response.json(message);
  }

  async listByUser(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const messagesService = container.resolve(MessagesService);

    const messages = await messagesService.listByUser(user_id);

    return response.json(messages);
  }
}