import { Chat } from './chat';
import { User } from './user';

export class Convo {
  users: User[];
  chats: Chat[];
  constructor(users: User[], chats: Chat[]) {
    this.users = users;
    this.chats = chats;
  }
}
