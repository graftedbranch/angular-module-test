import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { TenantGuard } from '../tenant.guard';
import { ModuleOneComponent } from './module-one.component';
import { PreFlightGuard } from '../pre-flight.guard';
import { AccountGuard } from '../account.guard';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleOneComponent,
    canActivate: [PreFlightGuard],
    children: [
      {
        path: ':name',
        component: CompOneComponent,
        canActivate: [TenantGuard],
        children: [
          {
            path: ':accountId',
            component: AccountComponent,
            canActivate: [AccountGuard],
          },
        ],
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleOneRoutingModule {}
