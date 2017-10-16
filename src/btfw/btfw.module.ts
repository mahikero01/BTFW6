import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TitlebarNameComponent } from './titlebar-name/titlebar-name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    TitleBarComponent,
    TitlebarNameComponent
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class BtfwModule { }
