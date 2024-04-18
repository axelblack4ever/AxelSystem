import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestacadoPageRoutingModule } from './destacado-routing.module';

import { DestacadoPage } from './destacado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestacadoPageRoutingModule
  ],
  declarations: [DestacadoPage]
})
export class DestacadoPageModule {}
