import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, filter, map, retry, take, tap} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  Geocode, Records, MarkCode
} from './data.interfaces';
import {Apartment} from "./apartment.interface";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private apiURL = "https://app.smartapartmentdata.com/List/json/listItems.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E";
  private apiIdUrl= "https://app.smartapartmentdata.com/List/json/propertyItem.aspx?listID=5363950&token=5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E&propertyID="
  constructor(private httpClient: HttpClient) {
  }
  /*

    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      // return new ErrorObservable(error);

  }*/
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  getAllRecords(): Observable<Records[]> {
    // @ts-ignore
    return this.httpClient.get<Records[]>(this.apiURL).pipe(
      // @ts-ignore
      tap(data => {console.log(data)}
      ),
      // @ts-ignore
      map(res => res['records']),
      catchError(this.handleError)
    );
  }

  getAllMarkers():Observable<Geocode>
  {
    // @ts-ignore
    return  this.httpClient.get<Geocode[]>(this.apiURL).pipe(
      map(items =>{
        // @ts-ignore
      //  console.log(items['records'].filter(data => data.geocode));
        // @ts-ignore
        let tem= items['records'];
        // @ts-ignore
        return tem.map(item => item.geocode);
      }),
  /*    map(items =>{
        // @ts-ignore
        console.log(items['records'].filter(data => data.geocode));
        // @ts-ignore
        return items['records'].filter(item => item['city']);
      }),*/
      catchError(this.handleError)
    );





  }
  // @ts-ignore
  getAllMarkcodes(): Observable<MarkCode[] >{

    return  this.httpClient.get<MarkCode[]>(this.apiURL).pipe(
       map(data => {
         // @ts-ignore
         let dataA= data['records'].map((item:any) => item.geocode);
         // @ts-ignore
         let dataB =data['records'];
         ///let dataC =[...dataA,...dataB];

         const mergeById = (a1: any[], a2: any[]) =>
           a1.map((itm: any) => ({
             ...a2.find((item: { geocode: any; }) => (item.geocode === itm) && item),
             ...itm
           }));
         let dataT = mergeById(dataA,dataB);
          let dataP = dataT.map(({Latitude,Longitude,propertyID,name,favorite}) => ({Latitude,Longitude,propertyID,name,favorite}));
         // @ts-ignore
         return  dataP;

       }),
      catchError(this.handleError)
    )
  }





  // @ts-ignore
  getAparment(id: Number ):Observable<Apartment> {

    return this.httpClient.get<Apartment>(this.apiIdUrl + id.toString()).pipe(
      // @ts-ignore
      //  map(res => res['records']),
      catchError(this.handleError)
    );
  }
}
