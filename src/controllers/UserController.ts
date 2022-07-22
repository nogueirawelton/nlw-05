import { Request, Response } from "express";
import { container } from "tsyringe";
import { UsersService } from "../services/UsersService";

export class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    const createUserUseCase = container.resolve(UsersService);
    
    const user = await createUserUseCase.create({ email });

    return response.json(user);
  }
}