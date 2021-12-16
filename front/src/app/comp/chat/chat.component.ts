import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { Convo } from 'src/app/models/convo';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  inputMessage: string = '';

  @Input()
  convo: Convo;

  currentUser: User;

  constructor(private userService: UserService) {}

  sendMessage() {}

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
  }
}
