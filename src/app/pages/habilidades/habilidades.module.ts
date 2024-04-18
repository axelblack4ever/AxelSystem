import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilidadesPageRoutingModule } from './habilidades-routing.module';

import { HabilidadesPage } from './habilidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilidadesPageRoutingModule
  ],
  declarations: [HabilidadesPage]
})
export class HabilidadesPageModule {}
