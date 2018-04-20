import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  allAuthors = [];
  updateInfo ={
    name: ''
  }

  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit() {
    this._service.retrieveAuthors((res) => {
      this.allAuthors = res;
      console.log(this.allAuthors);
    })
  }

  editAuthor(id) {
    this._service.update(id, this.updateInfo, (res => {
      this.updateInfo = {
        name: ""
      }
      this._router.navigate(['']);
    }))
  }

}
