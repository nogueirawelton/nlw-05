import { prisma } from "../../database/prisma";
import { ICreateMessageDTO } from "../../dtos/ICreateMessageDTO";
import { Message } from "../../entities/Message";
import { IMessagesRepository } from "../IMessagesRepository";

export class MessagesRepository implements IMessagesRepository {
  async listByUser(user_id: string): Promise<Message[]> {
    
    const messages = await prisma.message.findMany({
      where: {
        user_id,
      },
    });
    return messages;
  }
  
  async create(data: ICreateMessageDTO): Promise<Message> {
    const message = await prisma.message.create({
      data,
    });
    return message;
  }
  
}