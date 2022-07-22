import { prisma } from '../../database/prisma';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
  
  async create(data: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data,
    });
    return user;
  }
}