import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {path: 'home', loadChildren:()=> import('./home/home.module').then((m)=>m.HomeModule)},
  {path: 'productos', loadChildren:()=> import('./productos/productos.module').then((m)=>m.ProductosModule)},  
  {path: 'promociones', loadChildren:()=> import('./promociones/promociones.module').then((m)=>m.PromocionModule)},
  {path: 'servicios', loadChildren:()=> import('./servicios/servicios.module').then((m)=>m.ServicioModule)},
  {path: 'contactos', loadChildren:()=> import('./contactos/contactos.module').then((m)=>m.ContactoModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
