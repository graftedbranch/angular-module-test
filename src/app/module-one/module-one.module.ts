import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { CompOneComponent } from '../comp-one/comp-one.component';
import { ModuleOneComponent } from './module-one.component';
import { TenantGuard } from '../tenant.guard';


@NgModule({
  declarations: [CompOneComponent, ModuleOneComponent],
  imports: [
    CommonModule,
    ModuleOneRoutingModule
  ],
  providers: [
    TenantGuard
  ]
})
export class ModuleOneModule { }
