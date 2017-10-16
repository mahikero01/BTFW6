import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BtfwModule } from '../btfw/btfw.module';
import { RouterModule } from '@angular/router'
import { appRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    BtfwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
