import { Component, OnInit } from '@angular/core';
import {DataService} from "../../core/services/data-service.service";
import {MarkCode, Records} from "../../shared/models/data.interfaces";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {Observable} from "rxjs";
import {EntityState} from "../../store/reducers";
import {Store} from "@ngrx/store";
import {MapSelectors, RecordSelectors} from "../../store/selectors";
import {FilterBy, FilterByMark, FilterFavMarks, GetAllRecords} from "../../store/actions";
import {MatSliderChange} from "@angular/material/slider";
import {MapBoxService} from "../../maplib/services/map-box-service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    sliderValue: any;
   records$:Observable<Records[]> = this.recordSelector.records$;
  // markers$:Observable<MarkCode[]> = this.temp.markers$;

  constructor( private store : Store<EntityState>, private recordSelector: RecordSelectors, private mapService: MapBoxService, private temp: MapSelectors) {
    this.store.dispatch(new GetAllRecords());

  }

  ngOnInit(): void {


}
  updateSetting($event: MatSliderChange) {
    this.sliderValue =$event.value;

  }
  onActive() {
    this.store.dispatch(new FilterBy(this.sliderValue));
  }

  onFavorite() {
    this.store.dispatch(new FilterFavMarks(true));
  //  this.markers$.subscribe(data =>{
    //  this.mapService.onFilterMarkers(data);
    //})
  }
}
