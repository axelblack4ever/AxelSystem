import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroduccionPageRoutingModule } from './introduccion-routing.module';

import { IntroduccionPage } from './introduccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroduccionPageRoutingModule
  ],
  declarations: [IntroduccionPage]
})
export class IntroduccionPageModule {}
