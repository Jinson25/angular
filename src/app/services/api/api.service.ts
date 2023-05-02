import { Injectable } from '@angular/core';
import {LoginI} from '../../models/login.interfaces'
import {ResponseI} from '../../models/response.interfaces'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URL = 'http://localhost:4000';

  constructor(private http: HttpClient){}

  getProducts(){
    return this.http.get<any>(this.URL + '/products')
  }
}
