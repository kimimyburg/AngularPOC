import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITodo, Message } from "../models";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "src/environment/environment.dev";

@Injectable({
    providedIn: 'root'
  })
  export class TodoService {
    private employeesUrl = environment.baseUrl + 'Signalr/Message';  

    constructor (private http: HttpClient) {}
  
    getAll(): Observable<ITodo[]> {
      const params = new HttpParams()
      .set('apikey', environment.apikey!)
      return this.http.get<ITodo[]>('http://dataservice.accuweather.com/locations/v1/regions',{params})
    }

    getMessage(): Observable<Message> {
      return this.http.get<Message>(this.employeesUrl)  
      .pipe(  
        catchError(this.handleError)  
      );  
    }

    private handleError(err: any) {  
      console.log(err)
      let errorMessage: string;  
      if (err.error instanceof ErrorEvent) {  
        errorMessage = `An error occurred: ${err.error.message}`;  
      } else {  
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;  
      }  
      console.error(err);  
      return throwError(errorMessage);  
    }  
  }