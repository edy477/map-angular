import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemComponent} from "./item.component";
import {MaterialModuleModule} from "../../shared/material-module/material-module.module";
import {MaplibModule} from "../../maplib/maplib.module";
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [

    CommonModule,
    MaterialModuleModule,
    MaplibModule,
    RouterModule,
    MatTooltipModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ItemModule { }
