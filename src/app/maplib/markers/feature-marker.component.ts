import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {MapBoxService} from "../services/map-box-service";
import {Route, Router} from "@angular/router";
//import { filterReducer, IMarker, ACTIONS } from '../../../store/side.actions';
import {Store} from "@ngrx/store";
import {DataService} from "../../core/services/data-service.service";
import {MarkCode, Records} from "../../shared/models/data.interfaces";
import {Observable} from "rxjs";
import {EntityState} from "../../store/reducers";
import {FilterByMark, GetRecord, SetActiveMarks} from "../../store/actions";
import {MapSelectors} from "../../store/selectors";
@Component({
  selector: 'app-feature-marker',
  templateUrl: './feature-marker.component.html',
  styleUrls: ['./feature-marker.component.scss']
})
export class FeatureMarkerComponent implements OnInit, AfterContentChecked {
  @Input() Image: String = "/assets/images/map-circle-red.svg";
  @Input() imageFav:String="/assets/images/map-circle-red-heart.svg";
  @Input() FavState: Boolean = false;
  @Input() Id: number=0;
  @Input() coords: any;
  @Input() Lat: any;
  @Input() Long: any;
  markset$: Observable<MarkCode[]> | undefined;
  private records: Records | undefined;

  constructor(private router: Router,private mapService: MapBoxService, private dataService: DataService,private store: Store<EntityState>,private select:MapSelectors) {
        this.markset$ = this.select.markers$;
  }

  ngOnInit(): void {

    }
    activated() {

      this.store.dispatch(new FilterByMark(this.Id));


//o(n2)

      let ttm;
      // @ts-ignore
      this.markset$.subscribe(data => {

        ttm = this.mapService.markers.filter(mark => mark === data[0].propertyID);

        this.mapService.markers.forEach(item => {
          data.forEach(dts =>{
            if(dts.propertyID  != item.propertyID){
              item.remove();
            }

           // this.Image = "/assets/images/map-circle-blue.svg";
          })

  //        if(item.propertyID != data)
        })

        this.mapService.mapInstance.flyTo({center: [this.Long, this.Lat], zoom: 16.5})
        this.mapService.loadFeatureMarkers(data);
      })
      this.store.dispatch(new GetRecord(this.Id))
      console.log(this.Image)

      //this.mapService.mapInstance.flyTo({center: [this.Long, this.Lat], zoom: 16.5})
      //
      /* setTimeout(()=>{
         console.log(this.Id)
         this.store.dispatch({
           type: ACTIONS.MARKER_SET,
           payload:{
             id:this.Id,
             clicked: true,
           }
         })
       },1000)}*/
    }
  ngAfterContentChecked(): void {

  }

}
