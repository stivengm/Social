import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../core/service/list.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public listServices: ListService) { }

  ngOnInit() {
    this.listServices.getCountries().subscribe(data => {
      console.log(data);
    });
    this.listServices.getCities().subscribe(data => {
      console.log(data);
    });
  }

}
