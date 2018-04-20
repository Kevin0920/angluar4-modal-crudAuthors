import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';

@Injectable()
export class MainService {

  authors = [];
  author;
  constructor(private _http: Http) { }


  createAuthor(authors, callback) {
    console.log('service course ', authors);
    this._http.post('/authors', authors)
    .subscribe(
      (res) => {
        callback(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  retrieveAuthors(callback) {
    console.log("all authors");
    this._http.get('/authors').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  delete(id, callback) {
    this._http.delete('/authors/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  update(id, author, callback) {
    console.log(author);
    this._http.put("/authors/edit/" + id, author).subscribe(
      (res) => {
        console.log(res);
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
