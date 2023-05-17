import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';


import {FlexLayoutModule} from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    PageLoginComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FlexLayoutModule,
    SharedModule,
    
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
