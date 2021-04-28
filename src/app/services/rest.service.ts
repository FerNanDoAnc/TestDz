import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
    
   }

   public get(url:string){
     return this.http.get(url); //va a hacer un get a la api depost
   }
}
