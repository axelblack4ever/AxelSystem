import { Component, OnInit } from '@angular/core';
import { InteligenciasService } from 'src/app/servicios/inteligencias.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import * as _ from 'lodash';

interface INT {
  ID: number;
  Nombre: string;
  Conteo: number 
}

@Component({
  selector: 'app-inteligencias',
  templateUrl: './inteligencias.page.html',
  styleUrls: ['./inteligencias.page.scss'],
})
export class InteligenciasPage implements OnInit {
  // Declaro la variable para que pueda ser accedida en la template HTML
  conteo: number = 0;

  constructor(public intServicio: InteligenciasService, public habServicio: HabilidadesService) { }

  ngOnInit() {
    // Bucle para recorrer cada inteligencia obtenida desde el servicio
    this.intServicio.inteligencias.forEach((int: INT) => 
      {
        // Obtengo el listado de habilidades para la inteligencia referenciada mediante un filtro de lodash
        // Utilizo la interface declarada en el bucle para generar una función que permite realizar el filtro
        const ints = _.filter(this.habServicio.habilidades, function (o) { return o.Inteligencia==int.ID});
        // Asigno al atributo de conteo el valor de la longitud del array generado con la lista de habilidades
        this.conteo = ints.length;
      }
    );
  }
}
