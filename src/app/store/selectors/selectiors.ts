
import {EntityState} from "../reducers";
import {MapState} from "../reducers/map.reducer";
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';
import {Inject, Injectable} from "@angular/core";


 const getEntityState = createFeatureSelector<EntityState>('entityCache');


const getMapState = createSelector(
  getEntityState,
  (state: EntityState) => state.marks
);

export const getCollectionState = createSelector(
  getMapState,
  (state: MapState) => state.marks
);


@Injectable()
export class MapSelectors {
  constructor( private store: Store<EntityState>) {}
  markers$ = this.store.pipe(select(getCollectionState));
}
