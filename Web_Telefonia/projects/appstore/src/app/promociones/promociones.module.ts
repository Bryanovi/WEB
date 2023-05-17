import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromocionesRoutingModule } from './promociones-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    PromocionesRoutingModule,
    SharedModule,
    MatButtonModule,
  ]
})
export class PromocionModule { }
