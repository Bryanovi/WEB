import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerifericosRoutingModule } from './perifericos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    PerifericosRoutingModule,
    SharedModule,
    MatButtonModule,
  ]
})
export class PerifericosModule { }
