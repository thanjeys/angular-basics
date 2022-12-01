import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  search: any;
  activeBox: any;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    console.log(this.el.nativeElement.querySelectorAll('.box'));
    console.log(document.querySelectorAll('.box'));
  }
  
}
