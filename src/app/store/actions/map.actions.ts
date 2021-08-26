import {Action} from "@ngrx/store";
import {MapView, MarkCode} from "../services/data.interfaces";
import {Geocode, Records} from "../../shared/models/data.interfaces";
import {LngLat, LngLatBounds, LngLatLike} from "mapbox-gl";


/* -------------------------------------------------------------------------- */
/*                                Map Actions                                */
/* -------------------------------------------------------------------------- */
export const SET_MAP_VIEW  = '[Map] SET_MAP_VIEW';
export const SET_CENTER_MAP =  '[Map] SET_CENTER_MAP';

/* -------------------------------------------------------------------------- */
/*                                Mark Actions                                */
/* -------------------------------------------------------------------------- */
export const GET_ALL_MARKS = '[Mark] GET_ALL_MARKS';
export const GET_ALL_MARKS_SUCCESS = '[Mark] GET_ALL_MARKS_SUCCESS';
export const GET_ALL_MARKS_ERROR =  '[Mark] GET_ALL_MARKS_ERROR';
export const SET_ACTIVE_MARKS = '[Mark] SET_ACTIVE_MARKS';
export const FILTER_BY_MARK = '[Mark] FILTER_BY_MARK';
export const SET_ACTIVE_MARKS_SUCCESS = '[Mark] SET_ACTIVE_MARKS_SUCCESS';
export const SET_ACTIVE_MARKS_ERROR = '[Mark] SET_ACTIVE_MARKS_ERROR';
export const SET_ACTIVE_MARK = '[Mark] SET_ACTIVE_MARK';
export const SET_DELETE_MARK = '[Mark] SET_TO_DELETE_MARK'
export const SET_EDIT_MARK = '[Mark] SET_EDIT_MARK';
export const SET_FAV_ON_MARK  = '[Mark] SET_FAV_ON_MARK';
export const FILTER_FAV_MARKS =  '[Mark] FILTER_FAV_MARK';


export class GetAllMarks implements Action {
  readonly type = GET_ALL_MARKS;
}

export class GetAllMarksSuccess implements Action {
  readonly type = GET_ALL_MARKS_SUCCESS;
  constructor(public readonly payload: MarkCode[]) {}
}

export class GetAllMarksError implements Action {
  readonly type = GET_ALL_MARKS_ERROR;
  constructor(public readonly payload: any) {}
}
export class SetMapView implements  Action{
  readonly  type = SET_MAP_VIEW;
  constructor(public  readonly payload: MapView) {}
}

export class SetActiveMarks implements Action {
  readonly type = SET_ACTIVE_MARKS;
  constructor(public readonly payload: any) {
  }
}


export class SetActiveMarksSuccess implements Action {
  readonly type = SET_ACTIVE_MARKS_SUCCESS;
  constructor(public readonly payload: MarkCode) {
  }
}

export class SetActiveMarksError implements Action {
  readonly type = SET_ACTIVE_MARKS_ERROR;
  constructor(public readonly payload: any) {
  }
}


export class FilterByMark implements Action {
  readonly type = FILTER_BY_MARK;
  constructor(public readonly payload: number) {
  }
}

//export const FILTER_FAV_MARKS =  '[Mark] FILTER_FAV_MARK';

export class FilterFavMarks implements Action {
  readonly type = FILTER_FAV_MARKS;
  constructor(public readonly payload: boolean) {
  }
}


/*
export class SetActiveMarks implements Action {
  readonly type = SET_ACTIVE_MARKS;
  constructor(public readonly payload: any) {
  }
}
export class SetActiveMark implements Action {
  readonly type = SET_ACTIVE_MARK;
  constructor(public readonly payload: any) {
  }
}
export class SetDeleteMark implements Action {
  readonly type = SET_DELETE_MARK;
  constructor(public readonly payload: any) {
  }
}

export class SetEditMark implements Action {
  readonly type = SET_EDIT_MARK;
  constructor(public readonly payload: any) {
  }
}

export class SetFavMap implements Action {
  readonly type = SET_FAV_ON_MARK;
  constructor(public readonly payload: any) {
  }
}

/*
export class SetCenterMap implements Action {
  readonly type = SET_CENTER_MAP;
  constructor(public readonly payload: any) {
  }
}

export class SetViewMap implements Action {
  readonly type = SET_MAP_VIEW;
  constructor(public readonly payload: any) {
  }
}
*/
export type AllMapActions =
   GetAllMarks| GetAllMarksError|GetAllMarksSuccess |SetMapView | SetActiveMarks |SetActiveMarksError|SetActiveMarksSuccess | FilterByMark | FilterFavMarks ;

 /* | SetActiveMarks
  | SetActiveMark
  | SetDeleteMark
  | SetEditMark
  | SetViewMap
  | SetFavMap
  | SetCenterMap;




*/


