import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BtfwModule } from '../btfw/btfw.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BtfwModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
