import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCarrosPageRoutingModule } from './listar-carros-routing.module';

import { ListarCarrosPage } from './listar-carros.page';
import { ListaCarsComponent } from '../components/lista-cars/lista-cars.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCarrosPageRoutingModule
  ],
  declarations: [ListarCarrosPage,ListaCarsComponent]
})
export class ListarCarrosPageModule {}
