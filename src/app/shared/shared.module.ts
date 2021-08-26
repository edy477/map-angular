import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModuleModule} from "./material-module/material-module.module";
@NgModule({
  declarations: [],
  imports: [MaterialModuleModule,
    CommonModule
  ],
  providers:[],
  exports: [MaterialModuleModule]
})
export class SharedModule {}
