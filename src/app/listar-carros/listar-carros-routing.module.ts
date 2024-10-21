import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCarrosPage } from './listar-carros.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCarrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCarrosPageRoutingModule {}
