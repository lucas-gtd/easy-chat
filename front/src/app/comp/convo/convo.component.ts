import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { Convo } from 'src/app/models/convo';
import { User } from 'src/app/models/user';
import { ConvoService } from 'src/app/services/convo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.css'],
})
export class ConvoComponent implements OnInit {
  chats: Chat[] = [];

  typedChat: string = '';

  constructor(private userService: UserService, private router: Router) {}

  leaveChat(): void {
    this.userService.currentUser = null;
    this.router.navigate(['/signin']);
  }

  isOurMessage(chat: Chat): boolean {
    if (chat.sender === this.userService.currentUser) {
      return true;
    }
  }

  ngOnInit(): void {
    this.chats = [
      new Chat(new User('blabla', 'blabla', 'laetitia'), 'salut'),
      new Chat(this.userService.currentUser, 'salut, ça va ?'),
    ];
  }
}
