import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table'  
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContainerComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    ContainerComponent,
    FlexLayoutModule,
    MatCardModule,
    TableComponent,
    MatIconModule,
    MatDialogModule
  ]
})
export class SharedModule { }
