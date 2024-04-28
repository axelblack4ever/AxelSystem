import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  habilidadesFiltradas: any;
  seleccion: any;

  constructor(public habServicio: HabilidadesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.seleccion = this.activatedRoute.snapshot.params;
    let categoria = this.seleccion.Categoria;
    let criterio = this.seleccion.Criterio;
    // this.habilidadesFiltradas= _.filter(this.habServicio.habilidades, [categoria,criterio]);
    this.habilidadesFiltradas= _.filter(this.habServicio.habilidades, function (o) { return o.Inteligencia==criterio});

  }

}
