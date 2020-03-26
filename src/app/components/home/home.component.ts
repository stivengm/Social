import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogged;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isLogged = window.localStorage.getItem('')
    // if (this.isLogged == '' || this.isLogged == undefined) {
    //   this.router.navigate(['/login']);
    // }
  }

}
