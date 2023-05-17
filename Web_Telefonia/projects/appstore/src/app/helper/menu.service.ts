import { Injectable } from '@angular/core';

export interface IMenu{
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listaMenu: IMenu[]=[
    {title:'Home',url:'/home',icon:'home'},
    {title:'Productos',url:'/productos',icon:'settings_cell'},
    {title:'Promociones',url:'promociones',icon:'local_offer'},
    {title:'Servicios',url:'/servicios',icon:'build'},
    {title:'Contactos',url:'/contactos',icon:'contacts'},

  ]
  constructor() { }

  getMenu():IMenu[]{
    return[...this.listaMenu]
  }

  getMenuByUrl(url:string):IMenu{
    return this.listaMenu.find(
      (menu)=>menu.url.toLowerCase()===url.toLowerCase()
      ) as IMenu
  }
}
