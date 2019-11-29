import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Photos } from '../model/Photos';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPhotos(){
    return this.http.get<Photos[]>('https://jsonplaceholder.typicode.com/photos?_limit=10');
  }
}
