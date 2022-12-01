import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ContactsComponent } from './contacts/contacts.component';

import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    DataService
  ]
})
export class AdminModule { }
