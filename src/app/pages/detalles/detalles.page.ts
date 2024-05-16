import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
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

  constructor(private ActivatedRoute: ActivatedRoute, public habServicio: HabilidadesService, public favServicio: FavoritosService) {
   }

  ngOnInit() {
    this.recibido = this.ActivatedRoute.snapshot.params;
    let id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.habilidad = _.find(this.habServicio.habilidades, ['ID',parseInt(id!)]);
    this.esFavorito = this.favServicio.favIDs.indexOf(parseInt(id!)) != -1;
  }

}
