import { Component } from '@angular/core';

@Component({
  selector: 'stp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  registros:any[] = [
    {_id:1, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.tventas.com/img/p/8/5/7/2/2/1/7/8572217-large_default.jpg'},
    {_id:2, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.tventas.com/img/p/8/5/7/2/2/1/7/8572217-large_default.jpg'},
    {_id:3, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.tventas.com/img/p/8/5/7/2/2/1/7/8572217-large_default.jpg'},
    {_id:4, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.tventas.com/img/p/8/5/7/2/2/1/7/8572217-large_default.jpg'},
    {_id:5, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.tventas.com/img/p/8/5/7/2/2/1/7/8572217-large_default.jpg'},
    {_id:6, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.tventas.com/img/p/8/5/7/2/2/1/7/8572217-large_default.jpg'},
    {_id:7, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.tventas.com/img/p/8/5/7/2/2/1/7/8572217-large_default.jpg'},
  ]
}
