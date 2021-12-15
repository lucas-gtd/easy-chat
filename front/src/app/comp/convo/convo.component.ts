import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { Convo } from 'src/app/models/convo';
import { User } from 'src/app/models/user';
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

  constructor(private userService: UserService) {}

  // initialise convo object on conversation click
  openChat(users: User[]) {
    // show the component
    this.showChat = true;
    // init the convo object
    this.convo = new Convo(users, [
      new Chat(
        new User('lae20100@gmail;com', '123', 'Laetitia'),
        'salut boT, ca va bien ?'
      ),
      new Chat(this.userService.currentUser, 'oui ca va bien et toi ?'),
      new Chat(new User('lae20100@gmail;com', '123', 'Laetitia'), 'ça va'),
    ]);
  }

  ngOnInit(): void {}
}
