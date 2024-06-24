import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage implements OnInit {

  // Se declaran tres variables y se inicializan vacías
  request: any ={};
  day_after_tomorrow: string ='';
  one_year_later: string = '';

  constructor() {}

  ngOnInit() { // Se calcularán las fechas de incio y fin

    // start date - at the earliest the day after tomorrow
    // Fecha de inicio, la más temprana de pasado mañana
    // Al usar let declaramos variables sólo para esta función
    let today = new Date(); // Valor de inicio
    let day_after_tomorrow = new Date(today.getTime() + 1000*60*60*24*2);
    this.day_after_tomorrow = day_after_tomorrow.toISOString().slice(0,10) + 'T09:00';

    // set initial date and time
    this.request.DesiredDateTime = this.day_after_tomorrow;

    // end date - at the latest in oone year
    let one_year_later = new Date(day_after_tomorrow.getTime() + 1000*60*60*24*365);
    this.one_year_later = one_year_later.toISOString().slice(0,10)+'T17:00';
  }

  // Click send
  send() {
    console.log('Se ha solicitado la fecha: ' + this.request.DesiredDateTime);
  }
}
