import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  date = new Date();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // users = this.http.get('https://jsonplaceholder.typicode.com/posts/1');

  users = { name: 'thana', age : 12};

}


