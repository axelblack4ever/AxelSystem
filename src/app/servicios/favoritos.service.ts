import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private _storage: Storage | null = null;
  public favIDs: Array<number>;

  constructor(private storage: Storage) {
    let storeID = window.localStorage.getItem('IDsFavoritos')!;
    this.favIDs = (JSON.parse(storeID))??[];
    this.init();
   }

   async init() {
    this._storage = await this.storage.create();
    let storeIDs = await this.storage.get('IDsFavoritos');
    this.favIDs = (JSON.parse(storeIDs)) ?? [];
   }

   add(favID: number) {
    this.favIDs.push(favID);
    // window.localStorage.setItem('IDsFavoritos', JSON.stringify(this.favIDs)); Corresponde al uso de Local Storage
    this._storage?.set('IDsFavoritos', JSON.stringify(this.favIDs));
   }

   remove (favID: number) {
    let removeIndex:number = this.favIDs.indexOf(favID);
    if (removeIndex != -1) {
      this.favIDs.splice(removeIndex,1);
      // window.localStorage.setItem('IDsFavoritos', JSON.stringify(this.favIDs)); Corresponde al uso de Local Storage
      this._storage?.set('IDsFavoritos',JSON.stringify(this.favIDs));
    }
   }
}
