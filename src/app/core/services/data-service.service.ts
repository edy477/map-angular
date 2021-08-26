import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, filter, map, retry, take, tap} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  Geocode, Records, MarkCode
} from '../../shared/models/data.interfaces';
import {Apartment} from "../../shared/models/apartment.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiURL = environment.apiURL;
  private apiIdUrl= environment.apiIdUrl;

  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {console.error('An error occurred:', error.error);
    } else {console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }return throwError('Something bad happened; please try again later.');
  }

  getAllRecords(): Observable<Records> {
    // @ts-ignore
    return this.httpClient.get<Records[]>(this.apiURL).pipe(
      // @ts-ignore
      // @ts-ignore
      map(res => {
        // @ts-ignore
        return  res['records'];
      }),
      catchError(this.handleError)
    );
  }
  getAllMarkers():Observable<Geocode>
  {
    return  this.httpClient.get<Geocode[]>(this.apiURL).pipe(
      map(items =>{
        // @ts-ignore
    let tem = items['records'];
        // @ts-ignore
        return tem.map(item => item.geocode);
      }),
      catchError(this.handleError)
    );
  }

  getAparment(id: Number ):Observable<Apartment> {

    return this.httpClient.get<Apartment>(this.apiIdUrl + id.toString()).pipe(
      // @ts-ignore
      //  map(res => res['records']),
      catchError(this.handleError)
    );
  }
}
