
import {EntityState} from "../reducers";
import {RecordState} from "../reducers/records.reducer";
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';
import {Inject, Injectable} from "@angular/core";


 const getEntityState = createFeatureSelector<EntityState>('entityCache');


const getRecordState = createSelector(
  getEntityState,
  (state: EntityState) => state.records
);

export const getRecordsState = createSelector(
  getRecordState,
  (state: RecordState) => state.records
);


@Injectable()
export class RecordSelectors {
  constructor( private store: Store<EntityState>) {}
  records$ = this.store.pipe(select(getRecordsState));
}
