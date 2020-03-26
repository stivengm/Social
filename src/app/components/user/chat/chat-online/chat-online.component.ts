import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-online',
  templateUrl: './chat-online.component.html',
  styleUrls: ['./chat-online.component.scss']
})
export class ChatOnlineComponent implements OnInit {
  search: any;
  userChat = [
    {
      id: 1,
      name: 'Stiven Gómez',
      srcImg: 'assets/images/no-user.png',
      online: false
    },
    {
      id: 2,
      name: 'Cristian Novoa',
      srcImg: 'assets/images/no-user.png',
      online: true
    },
    {
      id: 3,
      name: 'Cristian Rojas',
      srcImg: 'assets/images/no-user.png',
      online: true
    },
    {
      id: 4,
      name: 'Marcela',
      srcImg: 'assets/images/no-user.png',
      online: true
    },
    {
      id: 5,
      name: 'Jenny Rincón',
      srcImg: 'assets/images/no-user.png',
      online: false
    },
    {
      id: 6,
      name: 'David Colmenares',
      srcImg: 'assets/images/no-user.png',
      online: false
    },
    {
      id: 7,
      name: 'Felipe Gallón',
      srcImg: 'assets/images/no-user.png',
      online: true
    },
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.userChat);
  }

}
