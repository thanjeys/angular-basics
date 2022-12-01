import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  num:number = 10;
  num1:number = 12;

  firstname: string ="Hello";

  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  helloworld() {
    return "Hello World";
  }

  name(e: any) {
    console.log(e.target.value);
  }

}
