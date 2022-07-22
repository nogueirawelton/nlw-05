import { inject, injectable } from "tsyringe";
import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  email: string;
}

@injectable()
export class UsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async create({ email }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      return userAlreadyExists;
    }

    const user = await this.usersRepository.create({ email });
    return user;
  };

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);

    return user;
  }
}