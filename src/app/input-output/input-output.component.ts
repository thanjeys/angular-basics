import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() inputtext:string = 'hello';
  @Output() SomethingChanged = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  tellparent(): void {
    console.log('button clicked');
    this.SomethingChanged.emit(this.inputtext);
  }


}
