/* -------------------------------------------------------------------------- */
/*                                Record Actions                                */
/* -------------------------------------------------------------------------- */

import {Action} from "@ngrx/store";
import {Records} from "../../shared/models/data.interfaces";
import {Actions} from "@ngrx/effects";
import {Apartment} from "../../shared/models/apartment.interface";
import {GetAllMarksSuccess} from "./map.actions";


export const GET_ALL_RECORDS = '[Records] GET_ALL_RECORDS';
export const GET_ALL_RECORDS_SUCCESS = '[Records] GET_ALL_RECORDS_SUCCESS';
export const GET_ALL_RECORDS_ERROR = '[Records] GET_ALL_RECORDS_RECORD';
export const FILTER_RECORDS_BY = '[Records] FILTER_RECORDS_BY';


export const GET_ALL_RECORD = '[Record] GET_ALL_RECORD';
export const GET_ALL_RECORD_SUCCESS = '[Record] GET_ALL_RECORD_SUCCESS';
export const GET_ALL_RECORD_ERROR = '[Record] GET_ALL_RECORD_RECORD';


export class GetAllRecords implements Action{
  readonly  type = GET_ALL_RECORDS;
}

export class GetAllRecordsSucess implements  Action{
  readonly type = GET_ALL_RECORDS_SUCCESS;
  constructor(public  readonly payload: Records[]) {
  }
}

export class GetAllRecordsError implements  Action{
  readonly type = GET_ALL_RECORDS_ERROR;
  constructor(public  readonly payload: any) {
  }
}
export class FilterBy implements Action{
  readonly type = FILTER_RECORDS_BY;
  constructor(public  readonly  payload: any) {
  }
}

export class GetRecord implements Action{
  readonly type = GET_ALL_RECORD;
  constructor(public readonly payload: number){}
}

export class GetAllRecordSucess implements  Action{
  readonly type = GET_ALL_RECORD_SUCCESS;
  constructor(public  readonly payload: Apartment) {
  }
}

export class GetAllRecordError implements  Action{
  readonly type = GET_ALL_RECORD_ERROR;
  constructor(public  readonly payload: any) {
  }
}

export type AllRecordsActions = GetAllRecordSucess| GetAllRecords | GetAllRecordsSucess | GetAllRecordsError |FilterBy | GetRecord | GetAllMarksSuccess | GetAllRecordError;
