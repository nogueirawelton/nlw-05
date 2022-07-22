import { v4 as uuidv4 } from "uuid";

export class Message {
  id?: string;
  admin_id?: string;
  text: string;
  user_id: string;
  created_at?: Date;
  
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.created_at = new Date();
    }
  }
}