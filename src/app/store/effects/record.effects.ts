import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError, switchMap, tap} from 'rxjs/operators';
import {DataService} from "../../core/services/data-service.service";

import * as RecordActions from "../actions";
type GetOrderAction= RecordActions.GetRecord ;

@Injectable()
export class RecordEffects {
  @Effect()
  loadRecords =
    this.actions$.pipe(
      ofType(RecordActions.GET_ALL_RECORDS),
      switchMap(() =>
        this.dataService.getAllRecords().pipe(
           tap((records: any)=> console.log(records)),
          map((records) => new RecordActions.GetAllRecordsSucess(records)),
          catchError((error) => of(new RecordActions.GetAllRecordsError(error)))
        )
      )
    );

  loadRecord =
    this.actions$.pipe(
      ofType(RecordActions.GET_ALL_RECORD),
      switchMap((data: GetOrderAction) =>
        this.dataService.getAparment(data.payload).pipe(
          tap((record: any)=> console.log(record)),
          map((record) => new RecordActions.GetAllRecordSucess(record)),
          catchError((error) => of(new RecordActions.GetAllRecordError(error)))
        )
      )
    );
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
