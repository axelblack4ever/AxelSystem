import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/introduccion/introduccion.module').then( m => m.IntroduccionPageModule)
  },
  {
    path: 'destacado',
    loadChildren: () => import('./pages/destacado/destacado.module').then( m => m.DestacadoPageModule)
  },
  {
    path: 'introduccion',
    loadChildren: () => import('./pages/introduccion/introduccion.module').then( m => m.IntroduccionPageModule)
  },
  {
    path: 'inteligencias',
    loadChildren: () => import('./pages/inteligencias/inteligencias.module').then( m => m.InteligenciasPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./pages/habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'detalles/:id',
    loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
