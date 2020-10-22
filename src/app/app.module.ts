import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDeetsComponent } from './app-deets/app-deets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InvalidTenantComponent } from './invalid-tenant/invalid-tenant.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDeetsComponent,
    PageNotFoundComponent,
    InvalidTenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
