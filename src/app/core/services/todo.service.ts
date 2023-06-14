import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITodo } from "../models";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment.dev";

@Injectable({
    providedIn: 'root'
  })
  export class TodoService {
    constructor (private http: HttpClient) {}
  
    getAll(): Observable<ITodo[]> {
      const params = new HttpParams()
      .set('apikey', environment.apikey!)
      return this.http.get<ITodo[]>('http://dataservice.accuweather.com/locations/v1/regions',{params})
    }
  }