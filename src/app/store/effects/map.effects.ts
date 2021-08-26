import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError, switchMap, tap} from 'rxjs/operators';
import {DataService} from "../../core/services/data-service.service";
import * as  MapActions from '../actions';
import {DataServiceService} from "../services/data-service.service";
@Injectable()
export class MapEffects {
@Effect()
  loadMarks =
    this.actions$.pipe(

      ofType(MapActions.GET_ALL_MARKS),
      switchMap(() =>

        this.dataService.getAllMarkcodes().pipe(
          map((markcodes) => new MapActions.GetAllMarksSuccess(markcodes)),
          catchError((error) => of(new MapActions.GetAllMarksSuccess(error)))
        )
      )
    );

  @Effect()
  setaActiveMarks=
    this.actions$.pipe(

      ofType(MapActions.SET_ACTIVE_MARKS),
      switchMap(() =>

        this.dataService.getAllMarkcodes().pipe(

          map((markcodes) => new MapActions.GetAllMarksSuccess(markcodes)),

          catchError((error) => of(new MapActions.GetAllMarksSuccess(error)))
        )
      )
    );

     constructor(
       private actions$: Actions,
       private dataService: DataServiceService
   ) {}
   }
/*
@Injectable()
export class MapEffects {

  @Effect()
   = this.actions$.pipe(
    ofType(MapActions.GET_ALL_MARKS),
    mergeMap(() => this.dataService.getAllMarkcodes().
    pipe(
      map(markers => {
        return new MapActions.GetAllMarksSuccess(markers)
      }),
      catchError(error => of(new MapActions.GetAllMarksError(error)))
    )
    ));

  constructor(
    private actions$: Actions,
    private dataService: DataServiceService
  ) {}
}
*/
