import { Component, OnInit } from '@angular/core';
import {IControl} from "mapbox-gl";

@Component({
  selector: 'app-customcontrollers',
  templateUrl: './custom-controller.component.html',
  styleUrls: ['./custom-controller.component.scss']
})
export class CustomControllerComponent implements IControl {

  constructor(private container: HTMLElement) { }
  onAdd() {
    // @ts-ignore
    return this.container;
  }

  onRemove() {
    return this.container.parentNode!.removeChild(this.container);
  }
  getDefaultPosition() {
    return 'top-right';
  }

}
