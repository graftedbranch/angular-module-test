import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtwoRoutingModule } from './mtwo-routing.module';
import { MtwoComponent } from './mtwo.component';


@NgModule({
  declarations: [MtwoComponent],
  imports: [
    CommonModule,
    MtwoRoutingModule
  ]
})
export class MtwoModule { }
