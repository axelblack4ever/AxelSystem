import { Component, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.page.html',
  styleUrls: ['./destacado.page.scss'],
})
export class DestacadoPage implements OnInit {

  constructor(public habServicio: HabilidadesService,public favServicio: FavoritosService) { }

  ngOnInit() {
  }

}
