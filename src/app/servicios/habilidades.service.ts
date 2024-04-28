import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  public habilidades: any;

  baseURL = 'https://delfos-8ce30-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private http: HttpClient) {
    this.getHabilidades();
   }

   getHabilidades() {
    let requestUrl = `${this.baseURL}/habilidades.json`;
    this.http.get(requestUrl).subscribe((data) => {this.habilidades = data});
   }
}
