import { container } from "tsyringe";

import { IConnectionsRepository } from "../../repositories/IConnectionsRepository";
import { ConnectionsRepository } from "../../repositories/infra/ConnectionsRepository";
import { IMessagesRepository } from "../../repositories/IMessagesRepository";
import { MessagesRepository } from "../../repositories/infra/MessagesRepository";
import { UsersRepository } from "../../repositories/infra/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IMessagesRepository>(
  "MessagesRepository",
  MessagesRepository
)

container.registerSingleton<IConnectionsRepository>(
  "ConnectionsRepository",
  ConnectionsRepository
)