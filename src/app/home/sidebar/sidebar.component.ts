import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navside',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // @ts-ignore
 // sidestate$ :Observable<IMarker> | undefined;

  constructor(private router: Router) {
   // this.sidestate$ = store.select(state => state.sidestates);
  }
  ngOnInit(): void {
    // @ts-ignore
 /*   this.sidestate$.subscribe(item => {
      if(item.clicked){
        // @ts-ignore
         this.router.navigate(['/display/item'])
      }
    });*/
  }

}
