import { Component, OnInit } from '@angular/core';
import { Response } from '_debugger';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData = '';
  imgUrl = '';
  imgFolder = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private http: HttpClient) { }

  getJson() {
    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data);
      this.someData = data['license'];
      console.log(this.someData);
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe((data) => {
      console.log(data);
      this.imgUrl = data[0].filename;
      console.log(this.imgUrl);
    });
  }

  ngOnInit() {
    this.getJson();
    this.getMedia();
  }

}
