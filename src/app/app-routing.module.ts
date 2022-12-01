import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';
import { SimpletaskComponent } from './simpletask/simpletask.component';

const routes: Routes = [
  { path: 'pipe', component: PipeComponent},
  { path: 'simpletask', component: SimpletaskComponent},

  {
    path: 'admin',
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
