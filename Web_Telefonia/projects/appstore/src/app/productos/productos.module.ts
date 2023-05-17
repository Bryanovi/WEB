import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class ProductosModule { }
