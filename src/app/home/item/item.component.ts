import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {MapBoxService} from "../../maplib/services/map-box-service";
import {DataService} from "../../core/services/data-service.service";
import {EntityState} from "../../store/reducers";
import {Apartment} from "../../shared/models/apartment.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  //@ts-ignore
  //apartment: Apartment = {} as Apartment;
  //@ts-ignore
  sidestate$ :Observable<Apartment>;
  //@Input() Id:number=0;
  constructor( private dateService: DataService, private store: Store<EntityState>) {
    this.sidestate$ = store.select(state => state.records.record);
/*
    this.sidestate$ = store.select(state => state.sidestates);
    console.log(this.sidestate$);
    this.sidestate$.subscribe((item: { id: any; }) => {
      this.dateService.getAparment(item.id).subscribe(data => {
        this.apartment = data;
        console.log(this.apartment)
      })});*/

  }
  ngOnInit(): void {
  }
  clickedback() {}
}
