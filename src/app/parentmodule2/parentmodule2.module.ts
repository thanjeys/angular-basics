import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2componentComponent } from './module2component/module2component.component';



@NgModule({
  declarations: [
    Module2componentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Module2componentComponent
  ]
})
export class Parentmodule2Module { }
