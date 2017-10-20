import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BtfwModule } from '../btfw/btfw.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SkillsetComponent,
    MaintenanceComponent
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
