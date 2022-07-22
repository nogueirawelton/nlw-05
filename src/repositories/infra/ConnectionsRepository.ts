import { prisma } from "../../database/prisma";
import { ICreateConnectionDTO } from "../../dtos/ICreateConnectionDTO";
import { Connection } from "../../entities/Connection";
import { IConnectionsRepository } from "../IConnectionsRepository";

export class ConnectionsRepository implements IConnectionsRepository {
  async deleteBySocket(socket_id: string): Promise<void> {
    await prisma.connection.deleteMany({
      where: {
        socket_id
      }
    });
  }
  
  async updateAdmin(user_id: string, admin_id: string): Promise<void> {
    await prisma.connection.updateMany({
      where: {
        user_id
      },
      data: {
        admin_id
      }
    })
  }

  async findBySocketId(socket_id: string) {
    const connection = await prisma.connection.findFirst({ 
      where: {
        socket_id,
        },
     })
     return connection;
  }

  async findAllWithoutAdmin(): Promise<Connection[]> {
    const connections = await prisma.connection.findMany({
      where: {
        admin_id: null
      },
      include: {
        user: true
      }
    });
    return connections;
  }

  async updateSocket(id: string, socket_id: string): Promise<void> {
    await prisma.connection.update({
      where: {
        id,
      },
      data: {
        socket_id
      },
    });
  }

  async findByUserId(user_id: string): Promise<Connection> {
    const connection = await prisma.connection.findFirst({
      where: {
        user_id,
      },
    });
    return connection;
  }

  async create(data: ICreateConnectionDTO): Promise<Connection> {
    const connection = await prisma.connection.create({
      data,
    });
    return connection;
  }
}