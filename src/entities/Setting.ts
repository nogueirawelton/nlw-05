import { v4 as uuidv4 } from "uuid";

export class Setting {
  id?: string;
  username: string;
  chat: boolean;
  updated_at?: Date;
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.created_at = new Date();
    }
  }
}