import { ICreateConnectionDTO } from "../dtos/ICreateConnectionDTO";
import { Connection } from "../entities/Connection";

export interface IConnectionsRepository {
  create({ admin_id, socket_id, user_id }: ICreateConnectionDTO): Promise<Connection>;
  findByUserId(user_id: string): Promise<Connection>;
  updateSocket(id: string, socket_id: string): Promise<void>;
  findAllWithoutAdmin(): Promise<Connection[]>;
  findBySocketId(socket_id: string): Promise<Connection>;
  updateAdmin(user_id: string, admin_id: string): Promise<void>;
  deleteBySocket(socket_id: string): Promise<void>;
}