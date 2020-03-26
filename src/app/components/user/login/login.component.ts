import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isVisibility = 'visibility';
  constructor() { }

  ngOnInit() {
    
  }

  changeVisibility() {
    if (this.isVisibility == 'visibility') {
      this.isVisibility = 'visibility_off';
    } else {
      this.isVisibility = 'visibility';
    }
  }

}
