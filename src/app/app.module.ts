import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Parentmodule1Module } from './parentmodule1/parentmodule1.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SimpletaskComponent } from './simpletask/simpletask.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PipeComponent } from './pipe/pipe.component';
import { AppendPipe } from './custom.pipe';
import { Parentmodule2Module } from './parentmodule2/parentmodule2.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SimpletaskComponent,
    TemplateReferenceComponent,
    InputOutputComponent,
    PipeComponent,
    AppendPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Parentmodule1Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
