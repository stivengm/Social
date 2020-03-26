import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {
  public backgroundImage:string;
  constructor() { }

  ngOnInit() {
    this.backgroundImage = 'assets/images/portada' + '.jpg';
  }

}
