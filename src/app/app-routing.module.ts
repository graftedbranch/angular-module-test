import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDeetsComponent } from './app-deets/app-deets.component';
import { InvalidTenantComponent } from './invalid-tenant/invalid-tenant.component';
import { ModuleOneModule } from './module-one/module-one.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'deets', component: AppDeetsComponent},
  { path: 'invalid-tenant', component: InvalidTenantComponent},
  { path: '', loadChildren: () => import('./module-one/module-one.module').then((m) => m.ModuleOneModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
