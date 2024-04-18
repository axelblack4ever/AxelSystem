import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  recibido: any;

  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("Esto es un log" + this.ActivatedRoute);
    this.recibido = this.ActivatedRoute.snapshot.params;
  }

}
