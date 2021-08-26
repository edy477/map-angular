import {Records} from "../../shared/models/data.interfaces";
import {Apartment} from "../../shared/models/apartment.interface";
import * as RecordActions from "../actions";


export interface RecordState {
  records: Records[];
  record: Apartment;
  loading: boolean;
  clicked: boolean;
  error: boolean;

}

export const initialState: RecordState = {
  records: [],
  record: {} as Apartment,
  loading: false,
  clicked: false,
  error: false

};


export function reducer(
  state = initialState,
  action: RecordActions.AllRecordsActions
  // @ts-ignore
): RecordState  {

  switch (action.type) {
    case RecordActions.GET_ALL_RECORDS: {
      return {
        ...state,
        loading: true
      }
    }
    case RecordActions.GET_ALL_RECORDS_SUCCESS: {
      return {
        ...state,
        records: action.payload,
        loading: false
      };
    }
    case RecordActions.GET_ALL_RECORDS_ERROR: {
      return {
        ...state,
        loading: false
      }
    }
    case RecordActions.FILTER_RECORDS_BY: {
      let output = state.records.filter(eachVal => {
        return eachVal.floorplans.some(item => item.price <= action.payload);
      });
      return {
        ...state,
        records: output,
        loading:true,
      }
    }
    case RecordActions.GET_ALL_RECORD:{
      return {
        ...state,
        loading: true
      }
    }
    case RecordActions.GET_ALL_RECORD_SUCCESS: {
      return {
        ...state,
        record: action.payload,
        loading: false,
        clicked: true,
      };
    }
    case RecordActions.GET_ALL_RECORD_ERROR: {
      return {
        ...state,
        loading: false
      }
    }

  }
return  state;
}


