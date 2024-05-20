import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
import { ActionSheetController } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  recibido: any;
  habilidad: any;
  esFavorito: boolean = false;

  constructor(private ActivatedRoute: ActivatedRoute, public habServicio: HabilidadesService, public favServicio: FavoritosService, private actionSheet: ActionSheetController) {
   }

   async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Habilidad',
      buttons: [
        {
          text: 'Revisar',
          handler: () => {
            // Se implementara después
            window.location.href = "/request";
          }
        },
        {
          text: (this.esFavorito) ? ' Eliminar de favoritos'
                                  : ' Agregar a favoritos',
          role: (this.esFavorito) ? 'destructive' : '',
          handler: () => {
            if (this.esFavorito) {
              this.favServicio.remove(this.habilidad.ID);
              this.esFavorito = false;
            } else {
              this.favServicio.add(this.habilidad.ID);
              this.esFavorito = true;
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
   }

  ngOnInit() {
    this.recibido = this.ActivatedRoute.snapshot.params;
    let id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.habilidad = _.find(this.habServicio.habilidades, ['ID',parseInt(id!)]);
    this.esFavorito = this.favServicio.favIDs.indexOf(parseInt(id!)) != -1;
  }

}
