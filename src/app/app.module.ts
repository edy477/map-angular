import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import {MaplibModule} from "./maplib/maplib.module";
import {MAPBOX_ACCESS_TOKEN, MapBoxService} from "./maplib/services/map-box-service";
import {environment} from "../environments/environment";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {AppStoreModule} from "./store/app-store.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HomeModule,
    MaplibModule,
    AppStoreModule,
    StoreModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [{provide:MAPBOX_ACCESS_TOKEN, useValue:environment.apiKey},MapBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
