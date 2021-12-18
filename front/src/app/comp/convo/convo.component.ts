import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
export class ConvoComponent implements OnInit, AfterViewChecked {
  chats: Chat[] = [];
  // chats: Observable<Chat[]>;
  typedChat: string = '';

  @ViewChild('chatScroll') private scrollChat: ElementRef;

  constructor(
    private userService: UserService,
    private router: Router,
    private convoService: ConvoService
  ) {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  leaveChat(): void {
    this.userService.currentUser = null;
    this.router.navigate(['/signin']);
  }

  isOurMessage(chat: Chat): boolean {
    if (chat.sender.email === this.userService.currentUser.email) {
      return true;
    }
  }

  scrollToBottom(): void {
    try {
      this.scrollChat.nativeElement.scrollTop =
        this.scrollChat.nativeElement.scrollHeight;
    } catch (err) {}
  }

  newDoc() {
    this.convoService.newDocument(
      new Chat(
        this.convoService.docId(),
        this.userService.currentUser,
        this.typedChat
      )
    );
    this.scrollToBottom();
    this.typedChat = '';
  }

  ngOnInit(): void {
    this.scrollToBottom();
    this.convoService.documents.subscribe((docs) => {
      this.chats = docs;
      this.scrollToBottom();
    });
    // this._subChat = this.convoService.currentDocument.subscribe((newChat) => {
    //   this.chats.push(newChat);
    // });
  }
}
