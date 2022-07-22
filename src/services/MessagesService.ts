import { inject, injectable } from "tsyringe";
import { Message } from "../entities/Message";
import { IMessagesRepository } from "../repositories/IMessagesRepository";

interface IRequest {
  admin_id?: string;
  text: string;
  user_id: string;
}

@injectable()
export class MessagesService {
  constructor(
    @inject("MessagesRepository")
    private messagesRepository: IMessagesRepository
  ) {}

  async create({ admin_id, text, user_id}: IRequest): Promise<Message> {
    const message = await this.messagesRepository.create({ admin_id, text, user_id });

    return message;
  }

  async listByUser(user_id: string): Promise<Message[]> {
    const messages = await this.messagesRepository.listByUser(user_id)

    return messages;
  }
}