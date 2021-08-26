import {MapView, MarkCode} from "../services/data.interfaces";
import  * as MapActions from "../actions";
import {Geocode} from "../../shared/models/data.interfaces";
import {LngLat} from "mapbox-gl";


export interface MapState {
  marks: MarkCode[];
  mapview: MapView,
  loading: boolean;
  error: boolean;

}
let mapInit  = {
  center:  new LngLat(-97,32),
  zoom: 9
}
export const initialState: MapState = {
  marks: [],
  mapview: mapInit,
  loading: false,
  error: false
};


export function reducer(
  state = initialState,
  action: MapActions.AllMapActions
  // @ts-ignore
): MapState  {

  switch (action.type) {
    case MapActions.GET_ALL_MARKS: {
      return {
        ...state,
        loading: true
      }
    }
    case MapActions.GET_ALL_MARKS_SUCCESS: {
      return {
        ...state,
        marks: action.payload,
        loading: false
      };
    }
    case MapActions.GET_ALL_MARKS_ERROR: {
      return {
        ...state,
        loading: false
      }
    }
    case MapActions.SET_ACTIVE_MARKS: {
      return {
        ...state,
        marks: state.marks.filter(item => item == action.payload),
        loading: true

      }
    }
    case MapActions.SET_ACTIVE_MARKS_SUCCESS: {

      const result = {...state, loading: false};
      return result;
    }




    case MapActions.SET_ACTIVE_MARKS_ERROR:{
      return {
        ...state,
        loading: false
      }
    }
    case MapActions.FILTER_BY_MARK:{
       {

         return {
           ...state,
           marks: state.marks.filter(item => item.propertyID == action.payload),
           loading:true,
         }
//        state: state.marks.filter(h => h == action.payload)

      }
    }
    case MapActions.FILTER_FAV_MARKS:{
      {


        console.log(state.marks)
        return {
          ...state,
          marks: state.marks.filter(item => !item.favorite),
          loading:true,
        }


      }
    }

    }

  return state;
  }


