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
  {
    path: 'criptoactivos',
    loadChildren: () => import('./criptoactivos/criptoactivos.module').then( m => m.CriptoactivosPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./components/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'solicitud-viaje',
    loadChildren: () => import('./solicitud-viaje/solicitud-viaje.module').then( m => m.SolicitudViajePageModule)
  },
  {
    path: 'confirmacion-solicitud',
    loadChildren: () => import('./confirmacion-solicitud/confirmacion-solicitud.module').then( m => m.ConfirmacionSolicitudPageModule)
  },
  {
    path: 'viaje-activo',
    loadChildren: () => import('./viaje-activo/viaje-activo.module').then( m => m.ViajeActivoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
