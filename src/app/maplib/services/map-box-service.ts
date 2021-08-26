import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgZone
} from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import {LngLat, LngLatBounds, LngLatLike, Marker, MarkerOptions} from 'mapbox-gl';
import {Geocode, MarkCode} from "../../shared/models/data.interfaces";
import {AsyncSubject, Observable} from "rxjs";
import {FeatureMarkerComponent} from "../markers/feature-marker.component";
import {CustomControllerComponent} from "../custom-controller/custom-controller.component";
import {ControllerContentComponent} from "../controller-content/controller-content.component";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";

import * as MapboxDraw from "@mapbox/mapbox-gl-draw";
export const MAPBOX_ACCESS_TOKEN = new InjectionToken<string>('');
@Injectable()
export class MapBoxService {
// @ts-ignore
  mapInstance: mapboxgl.Map;
  markers: any[]=[];
  merkersPoints: LngLatLike[]=[];

  markst : [] =[] ;
  pullArray = [] as any;
  Bounds: LngLatBounds | undefined;


  constructor(@Inject(MAPBOX_ACCESS_TOKEN) private accessToken: string, private ngZone: NgZone, private injector: Injector,
              private appRef: ApplicationRef,private resolver: ComponentFactoryResolver)
  {// @ts-ignore
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken').set(accessToken);}



  loadMap(mapOptions: any){this.mapInstance = new mapboxgl.Map(mapOptions);}


  getComponentResolved()//Feature: FeatureMarkerComponent | CustomControllerComponent
  {
    let componentFactory = this.resolver.resolveComponentFactory( FeatureMarkerComponent); //
    let componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    return componentRef;
  }

  getDoom(componentRef: any){
    let domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    let element: HTMLElement = document.createElement('div');
    element.appendChild(domElem);
    return element;
  }



  loadFeatureMarkers(markCodes: any){
    markCodes.map((item: any, index: number) => {
      let newEl = this.getComponentResolved();

      newEl.instance.Lat=item.Latitude;
      newEl.instance.Long=item.Longitude;
      newEl.instance.FavState = item.favorite;
      newEl.instance.Id = item.propertyID;
      //let popup = new mapboxgl.Popup({ offset: 28 }).setText(
    //  item.propertyID
      //);


      let nerDoom = this.getDoom(newEl);
      let arker = new mapboxgl.Marker(nerDoom)
        .setLngLat([item.Longitude, item.Latitude])
      //  .setPopup(popup)
        .addTo(this.mapInstance);



      this.merkersPoints.push(arker.getLngLat());
      this.pullArray.push([arker.getLngLat().lng,arker.getLngLat().lat]);
      this.markers.push(arker);

    });

  }

addCustomController(){
  let componentFactory = this.resolver.resolveComponentFactory(ControllerContentComponent);
  let componentRef = componentFactory.create(this.injector);
  this.appRef.attachView(componentRef.hostView);
  let domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;


  let element: HTMLElement = document.createElement('div');
  element.appendChild(domElem);
  element.className="mapboxgl-ctrl";


  let Custom = new CustomControllerComponent(element);
  this.mapInstance.addControl(Custom,'top-right');

  }

  moveTo(position: any){
    this.mapInstance.flyTo(position);
  }

  addNewMarker(newMark: Marker){
    newMark.setDraggable(true);
    newMark.addTo(this.mapInstance);
    this.markers.push(newMark);
    this.merkersPoints.push(newMark.getLngLat());

  }

  deleteMarker(marker: Marker){
    let mark = this.markers.find(item => item === marker);
    // @ts-ignore
    mark.remove();
  }

  deleteById(id:any){
    let mark = this.markers.find(item => item.getElement().id === id.toString())
    // @ts-ignore
    mark.remove();
  }

  changeMarker(marker: Marker){}
  findmarker(marker: Marker){}

  returnMarkers(){
    return this.markers;
  }
  getToCenter(){
    // @ts-ignore

    let coordinates = this.pullArray;
    let bounds = coordinates.reduce(function (bounds:any, coord:any) {
      return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
   // let bounds = this.Bounds(coordinates);
     this.mapInstance.fitBounds(bounds);

  }

  addDrawControl(){
    let draw = new MapboxDraw({
      displayControlsDefault: false,

      controls: {
        polygon: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });
    this.mapInstance.addControl(draw,'top-left');
  }


  onFilterMarkers(marks: MarkCode[]){
    let tm = this.markers;
  }

  testIndex(){
    let tm = this.markers;

  }



  /***Utils***/

   getBounds(coordinates : any){
    let bound =coordinates.reduce(function (bounds:any, coord:any) {
      return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
    return bound;
  }

}
