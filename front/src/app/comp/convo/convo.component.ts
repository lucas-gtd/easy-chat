import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convo',
  templateUrl: './convo.component.html',
  styleUrls: ['./convo.component.css'],
})
export class ConvoComponent implements OnInit {
  users: string[] = ['Laetitia', 'Tju', 'Rachid'];

  constructor() {}

  ngOnInit(): void {}
}
