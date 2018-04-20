import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newAuthor = {
    name: ''
  };
  authors = [];
  
  constructor(private _service: MainService, private _router: Router) { }
  
  ngOnInit() {
    this._service.retrieveAuthors((res) => {
      this.authors = res;
    })
  }
  
  createAuthor() {
    this._service.createAuthor(this.newAuthor, (res) => {
      console.log('new person =>',res);
      this.newAuthor = {
        name:''
      }
    });
    this._router.navigate(['']);
  }

  delete(id) {
    this._service.delete(id, (res) => {
      this.authors = res;
    })
  }

}
