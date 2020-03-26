import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss']
})
export class WritePostComponent implements OnInit {
  publishText: string;
  constructor() { }

  ngOnInit() {
  }

  publish() {
    Swal.showLoading();
    if (this.publishText === '' || this.publishText === undefined) {
      Swal.hideLoading();
      Swal.fire({
        title: '',
        text: "Hola"
      })
    } else {
      console.log("no está vacío.");
    }
  }

}
