import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {MapEffects} from "./effects/map.effects";

import {StoreModule} from "@ngrx/store";
import {reducers} from './reducers'
import {reduce} from "rxjs/operators";
import {MapSelectors, RecordSelectors} from "./selectors";
import {RecordEffects} from "./effects/record.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('entityCache',reducers),
    //AppStoreModule.forFeature('marks', reducers),
    EffectsModule.forFeature([ MapEffects, RecordEffects ])
  ],
  providers:[MapSelectors,RecordSelectors],
  exports:[EffectsModule]

})
export class AppStoreModule { }
