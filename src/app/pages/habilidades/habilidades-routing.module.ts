import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilidadesPage } from './habilidades.page';

const routes: Routes = [
  {
    path: '',
    component: HabilidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilidadesPageRoutingModule {}
