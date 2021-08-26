import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapcontainerComponent } from './map-container/mapcontainer.component';
import {FeatureMarkerComponent} from "./markers/feature-marker.component";
import { CustomControllerComponent } from './custom-controller/custom-controller.component';
import {
  ControllerContentComponent,
} from './controller-content/controller-content.component';
import {MaterialModuleModule} from "../shared/material-module/material-module.module";



@NgModule({
  declarations: [
    MapcontainerComponent,
    FeatureMarkerComponent,
    CustomControllerComponent,
    ControllerContentComponent
  ],
  exports: [
    MapcontainerComponent
  ],
    imports: [
        CommonModule,
        MaterialModuleModule
    ]
})
export class MaplibModule{}
