import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteligenciasPage } from './inteligencias.page';

const routes: Routes = [
  {
    path: '',
    component: InteligenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteligenciasPageRoutingModule {}
