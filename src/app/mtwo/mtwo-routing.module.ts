import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtwoComponent } from './mtwo.component';

const routes: Routes = [
  {
    path: '',
    component: MtwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtwoRoutingModule { }
