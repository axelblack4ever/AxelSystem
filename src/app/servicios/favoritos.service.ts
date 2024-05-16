import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  public favIDs: Array<number>;

  constructor() {
    let storeID = window.localStorage.getItem('IDsFavoritos')!;
    this.favIDs = (JSON.parse(storeID))??[];
   }

   add(favID: number) {
    this.favIDs.push(favID);
    window.localStorage.setItem('IDsFavoritos', JSON.stringify(this.favIDs));
   }

   remove (favID: number) {
    let removeIndex:number = this.favIDs.indexOf(favID);
    if (removeIndex != -1) {
      this.favIDs.splice(removeIndex,1);
      window.localStorage.setItem('IDsFavoritos', JSON.stringify(this.favIDs));
    }
   }
}
