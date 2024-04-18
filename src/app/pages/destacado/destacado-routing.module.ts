import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestacadoPage } from './destacado.page';

const routes: Routes = [
  {
    path: '',
    component: DestacadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestacadoPageRoutingModule {}
