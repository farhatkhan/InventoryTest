import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root'
})
export class InventryService {

  private apiURL = "/api/Inventory/";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(this.apiURL+'InventoryGet')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(inventory): Observable<Inventory> {
    return this.httpClient.post<Inventory>(this.apiURL + 'InventoryPost' ,inventory, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<Inventory> {
    return this.httpClient.get<Inventory>(this.apiURL + 'InventoryGetId/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, inventory): Observable<Inventory> {
    return this.httpClient.put<Inventory>(this.apiURL + 'InventoryUpdate/'+ id, inventory, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Inventory>(this.apiURL+'InventoryDelete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
