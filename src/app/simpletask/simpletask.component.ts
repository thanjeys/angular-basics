import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpletask',
  templateUrl: './simpletask.component.html',
  styleUrls: ['./simpletask.component.css']
})
export class SimpletaskComponent implements OnInit {

  search: any;
  activeBox: any;
  constructor() { }

  ngOnInit(): void {
  }

}
