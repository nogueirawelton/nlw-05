import { ICreateMessageDTO } from "../dtos/ICreateMessageDTO";
import { Message } from "../entities/Message";

export interface IMessagesRepository {
  create(data: ICreateMessageDTO): Promise<Message>;
  listByUser(user_id: string): Promise<Message[]>;
}