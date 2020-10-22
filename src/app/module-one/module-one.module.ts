import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { CompOneComponent } from './comp-one/comp-one.component';
import { ModuleOneComponent } from './module-one.component';
import { TenantGuard } from '../tenant.guard';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CompOneComponent, ModuleOneComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModuleOneRoutingModule
  ],
  providers: [
    TenantGuard
  ]
})
export class ModuleOneModule { }
