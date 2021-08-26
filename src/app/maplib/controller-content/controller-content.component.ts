import { Component, OnInit } from '@angular/core';
import {MapBoxService} from "../services/map-box-service";
import {Marker} from "mapbox-gl";


@Component({
  selector: 'app-controllercontent',
  templateUrl: './controller-content.component.html',
  styleUrls: ['./controller-content.component.scss']
})
export class ControllerContentComponent implements OnInit {

   deleteActive: boolean = false;
  constructor(private mapservice: MapBoxService) { }

  ngOnInit(): void {

  }
  create(){
     let mark = new Marker();
     mark.setLngLat([-97.36724521850168, 32.70957950031368]);
     this.mapservice.addNewMarker(mark);
  }

  onDelete(){

      this.mapservice.mapInstance.on('mousemove', (e) => {
  //      console.log((e.lngLat.lng).toFixed(5));
////   (this.mapservice.markers.find(({_lngLat}) => _lngLat.lng.toString() == e.lngLat.lng.toFixed(5).toString()))

    });
  }

clearAll(){
    this.mapservice.markers.forEach(item =>{

       item.remove();
    })
}
onDraw(){

  //  this.mapservice.onFilterMarkers();
    this.mapservice.addDrawControl();
}
  onCenter()
  {

    this.mapservice.getToCenter();

  }

}
