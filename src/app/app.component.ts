import { Component, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('heading', {static: true}) heading: ElementRef | null = null;
  @ViewChild('appTest') appTest: TestComponent | null = null;

  @ViewChild('input') input: ElementRef | null = null;

  title = 'FirstApp';

  childtext: string = '';

  ngOnInit() {
    console.log('OnInit', this.heading?.nativeElement.innerHTML);
  }

  ngAfterViewInit()    {
    console.log('AfterViewInit', this.heading?.nativeElement.innerHTML);

    this.input?.nativeElement.focus();

    console.log('AppTest', this.appTest?.num1);
  }

  showTRV(h1:HTMLHeadElement, appTest: TestComponent)
  {
    console.log(h1);
    console.log(appTest.num1);

    appTest.num1 = 99999;
  }

  consoleData(e:any)
  {
    console.log(e);
  }
}
