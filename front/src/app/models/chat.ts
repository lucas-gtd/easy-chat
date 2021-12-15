import { User } from './user';

export class Chat {
  sender: User;
  content: string;
  date: Date;
  constructor(sender: User, content: string) {
    this.sender = sender;
    this.content = content;
    this.date = new Date(Date.now());
  }
}
