import { Component, OnInit } from '@angular/core';
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
  // conversations list
  users: User[][] = [
    [new User('lae20100@gmail.com', '123', 'Laetitia')],
    [new User('rachidLebouk@gmail.com', '123', 'Rachid')],
    [
      new User('rachidLebouk@gmail.com', '123', 'Rachid'),
      new User('tjuXenxai@gmail.com', '123', 'Tju'),
    ],
  ];

  // chat showing on conversation click
  showChat: boolean = false;

  // conversation object to send in the chat compoenent
  convo: Convo;

  constructor(
    private userService: UserService,
    private convoService: ConvoService
  ) {}

  // initialise convo object on conversation click
  openChat(users: User[]) {
    // init the convo object
    this.convo = new Convo(users, [
      new Chat(users[0], 'salut boT, ca va bien ?'),
      new Chat(this.userService.currentUser, 'oui ca va bien et toi ?'),
      new Chat(users[0], 'ça va'),
    ]);
    // show the component
    this.showChat = true;
  }

  ngOnInit(): void {
    this.convo.users = this.convoService.initConvoUsersInfos(
      this.userService.currentUser
    );
  }
}
