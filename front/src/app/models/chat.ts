import { User } from './user';

export class Chat {
  id: string;
  sender: User;
  content: string;
  constructor(id: string, sender: User, content: string) {
    this.id = id;
    this.sender = sender;
    this.content = content;
  }
}
