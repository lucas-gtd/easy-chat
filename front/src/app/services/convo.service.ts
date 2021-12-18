import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root',
})
export class ConvoService {
  // currentDocument = this.socket.fromEvent<Chat>('document');
  documents = this.socket.fromEvent<Chat[]>('documents');

  constructor(private socket: Socket) {}

  newDocument(chat: Chat) {
    this.socket.emit('addDoc', chat);
  }

  docId() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
