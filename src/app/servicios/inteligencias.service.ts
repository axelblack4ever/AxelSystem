import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteligenciasService {
  
  public inteligencias: any;

  baseURL = 'https://delfos-8ce30-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private http: HttpClient) {
    this.getInteligencias();
   }

   getInteligencias() {
    let requestUrl = `${this.baseURL}/inteligencias.json`;
    this.http.get(requestUrl).subscribe((data) => {this.inteligencias = data;});
   }
}
