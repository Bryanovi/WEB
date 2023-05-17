import { Component, EventEmitter, Output } from '@angular/core';
import { IMenu, MenuService } from '../../../helper/menu.service';

@Component({
  selector: 'stp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  listaMenu:IMenu[]
  expandido=false
  @Output() onValidarExpandido:EventEmitter<boolean> = new EventEmitter


  constructor(private menuServicio:MenuService){
    this.listaMenu=menuServicio.getMenu()
  }

 


}
