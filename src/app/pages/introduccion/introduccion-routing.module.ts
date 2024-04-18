import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroduccionPage } from './introduccion.page';

const routes: Routes = [
  {
    path: '',
    component: IntroduccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroduccionPageRoutingModule {}
