import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage implements OnInit {

  habilidades = [
    {ID: 1, Nombre: "Lingüistica", Descripcion:"Capacidad para el lenguaje, la comunicación verbal y escrita"},
    {ID: 2, Nombre: "Lógico-matemática", Descripcion:"Habilidad para el razonamiento lógico, el pensamiento abstracto y el cálculo matemático"},
    {ID: 3, Nombre: "Espacial", Descripcion:"Aptitud para comprender y manipular objetos en el espacio, así como para interpretar mapas y planos"},
    {ID: 4, Nombre: "Rítmica", Descripcion:"Sensibilidad al sonido, capacidad para reconocer patrones musicales y habilidad para tocar instrumentos"},
    {ID: 5, Nombre: "Interpersonal", Descripcion:"Habilidad para interactuar y comprender a otras personas, empatía y habilidades sociales"},
    {ID: 6, Nombre: "Intrapersonal", Descripcion:"Conciencia de sí mismo, autoconocimiento, autocontrol y capacidad para la introspección"},
    {ID: 7, Nombre: "Corporal kinestésica", Descripcion:"Destreza física, coordinación motora y habilidades atléticas"},
    {ID: 8, Nombre: "Naturalista", Descripcion:"Conexión con la naturaleza, capacidad para identificar y clasificar elementos del entorno natural"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
