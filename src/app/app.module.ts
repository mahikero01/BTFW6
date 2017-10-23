import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BtfwModule } from '../btfw/btfw.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShowresultComponent } from './search/showresult/showresult.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { appRoutes } from './app.routing';
import { LocationComponent } from './maintenance/location/location.component';
import { DepartmentComponent } from './maintenance/department/department.component';
import { SkillsetmComponent } from './maintenance/skillsetm/skillsetm.component';
import { ExportpdfComponent } from './search/export/exportpdf/exportpdf.component';
import { ExportexcelComponent } from './search/export/exportexcel/exportexcel.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowresultComponent,
    SkillsetComponent,
    LocationComponent,
    DepartmentComponent,
    SkillsetmComponent,
    ExportpdfComponent,
    ExportexcelComponent
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
