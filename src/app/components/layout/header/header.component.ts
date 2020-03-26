import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  messages: number;
  notifications: number;
  
  constructor() { }

  ngOnInit() {
    this.messages = 2;
    this.notifications = 5
  }

}
