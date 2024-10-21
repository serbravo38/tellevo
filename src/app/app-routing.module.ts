import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'portada',
    loadChildren: () => import('./portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'listar-carros',
    loadChildren: () => import('./listar-carros/listar-carros.module').then( m => m.ListarCarrosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
