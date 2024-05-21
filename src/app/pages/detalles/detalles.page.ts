import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
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

  constructor(private ActivatedRoute: ActivatedRoute, public habServicio: HabilidadesService, 
    public favServicio: FavoritosService, private actionSheet: ActionSheetController,
    private alertCtrl: AlertController) {
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
              this.presentarAlerta();
              // Se comenta la línea para incluir la alerta
              // this.favServicio.remove(this.habilidad.ID);
              // this.esFavorito = false;
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

   async presentarAlerta() {
    const alert = await this.alertCtrl.create({
      header: '¿Eliminar de destacados?',
      message: '¿Realmente deseas eliminar esta habilidad de la lista de destacados?',
      buttons: [
        { text: 'No'},
        { text: 'Si', handler: () => {
            this.favServicio.remove(this.habilidad.ID);
            this.esFavorito = false;
          }
        }
      ]
    }
    );
    await alert.present();
   }

  ngOnInit() {
    this.recibido = this.ActivatedRoute.snapshot.params;
    let id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.habilidad = _.find(this.habServicio.habilidades, ['ID',parseInt(id!)]);
    this.esFavorito = this.favServicio.favIDs.indexOf(parseInt(id!)) != -1;
  }

}
