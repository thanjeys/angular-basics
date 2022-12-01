import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Parentmodule2Module } from '../parentmodule2/parentmodule2.module';
import { Module3Component } from './module3/module3.component';



@NgModule({
  declarations: [
    Module1Component,
    Module2Component,
    Module3Component
  ],
  imports: [
    CommonModule,
    Parentmodule2Module
  ],
  exports: [
    Module1Component,
    Parentmodule2Module
  ]
})
export class Parentmodule1Module { }
