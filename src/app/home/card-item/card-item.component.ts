import {Component, Input, OnInit} from '@angular/core';
import {Floorplan} from "../../shared/models/data.interfaces";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
 @Input() listId: any;
 @Input() name: any;
 @Input() floorplans: Floorplan[]=[];
 @Input() highValueAmenities: any[]=[];
 @Input() imgSrc: String ='';

  constructor() { }
  ngOnInit(): void {

  }

}
