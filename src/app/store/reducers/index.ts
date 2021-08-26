import * as acitions from '../actions';
import * as MapReducer from './map.reducer';
import {ActionReducerMap} from "@ngrx/store";
import * as RecordRediucer from './records.reducer'
//export type Action  = actions.Actions
export interface EntityState{
  marks: MapReducer.MapState;
  records:  RecordRediucer.RecordState;
}

// @ts-ignore
export const reducers: ActionReducerMap<EntityState,any> = {
  marks: MapReducer.reducer,
  records: RecordRediucer.reducer
};
