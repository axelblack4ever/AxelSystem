import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteligenciasPageRoutingModule } from './inteligencias-routing.module';

import { InteligenciasPage } from './inteligencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteligenciasPageRoutingModule
  ],
  declarations: [InteligenciasPage]
})
export class InteligenciasPageModule {}
