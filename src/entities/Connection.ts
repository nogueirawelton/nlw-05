import { v4 as uuidv4 } from "uuid";
import { User } from "./User";

export class Connection {
  id?: string;
  admin_id?: string;
  socket_id: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
  user?: User;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
      this.created_at = new Date();
      this.updated_at = new Date();
    }
  }
}