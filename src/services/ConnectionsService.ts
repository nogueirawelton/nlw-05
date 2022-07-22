import { inject, injectable } from "tsyringe";
import { Connection } from "../entities/Connection";
import { IConnectionsRepository } from "../repositories/IConnectionsRepository";


interface IRequest {
  socket_id: string;
  user_id: string;
  admin_id?: string;
}

@injectable()
export class ConnectionsService {
  constructor(
    @inject("ConnectionsRepository")
    private connectionsRepository: IConnectionsRepository
  ) {}
  
  async create({ socket_id, user_id, admin_id }: IRequest): Promise<Connection> {
    const connection = await this.connectionsRepository.create({
      socket_id,
      user_id,
      admin_id
    });
    return connection;
  }

  async findByUser(user_id: string): Promise<Connection> {
    const connection = await this.connectionsRepository.findByUserId(user_id);

    return connection;
  }

  async updateSocket(id: string, socket_id: string): Promise<void> {
    await this.connectionsRepository.updateSocket(id,socket_id);
  }

  async findAllWithoutAdmin(): Promise<Connection[]> {
    const connections = await this.connectionsRepository.findAllWithoutAdmin();

    return connections;
  }

  async findBySocketId(socket_id: string): Promise<Connection> {
    const connection = await this.connectionsRepository.findBySocketId(socket_id);

    return connection;
  }

  async updateAdmin(user_id: string, socket_id: string):Promise<void> {
    await this.connectionsRepository.updateAdmin(user_id, socket_id);
  }

  async deleteBySocket(socket_id): Promise<void> {
    await this.connectionsRepository.deleteBySocket(socket_id);
  }
}