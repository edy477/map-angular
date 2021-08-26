import {
  AfterContentChecked, AfterContentInit, AfterViewInit,
  ApplicationRef, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver, ElementRef,
  Inject, Injector,
  NgZone,
  OnInit, Renderer2, ViewChild
} from '@angular/core';
import {MapBoxService} from "../services/map-box-service";
import {DataService} from "../../core/services/data-service.service";
import {Geocode, MarkCode} from "../../shared/models/data.interfaces";
import * as mapboxgl from "mapbox-gl";
import {MapMouseEvent} from "mapbox-gl";
import {BehaviorSubject, from, Observable} from "rxjs";
import * as fromState  from '../../store/reducers';
import * as collection  from '../../store/actions';
import {EntityState} from "../../store/reducers";
import {MapSelectors} from "../../store/selectors";
import {Store} from "@ngrx/store";
import {environment} from "../../../environments/environment";
import {FilterByMark, GetAllMarks, SetActiveMarks, SetActiveMarksSuccess} from "../../store/actions";
@Component({
  selector: 'app-mapcontainer',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapcontainerComponent implements OnInit {

  private style: String = environment.style;
  private marks$: Observable<MarkCode[]> | undefined;
  constructor(@Inject(MapBoxService) private mapBoxService: MapBoxService, private store: Store<EntityState>, private mapSelector: MapSelectors,private cd: ChangeDetectorRef){
    this.marks$ = this.mapSelector.markers$;
    this.store.dispatch(new GetAllMarks());

  }

  ngOnInit(): void {
   let mapOptions = {
       container: 'map',
       style: this.style,//maptiler style
       center: [-97.36724521850168, 32.70957950031368], // starting position [lng, lat]
       zoom: 12.706184594395763 // starting zoom
     }
     this.mapBoxService.loadMap(mapOptions);

    this.marks$?.subscribe(data => {
      this.mapBoxService.loadFeatureMarkers(data)
     // this.cd.detectChanges();
    });

    this.mapBoxService.addCustomController();

  }

}
