import { Component } from '@angular/core';
import { MetaDataColumn } from '../../../interfaces/metadatacolumn.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'stp-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {


  registros:any[] = [
    {_id:1, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdd9zT4cRKnfpBFgf9kEWZn3Cg5GrGAtQqMTSSLCPuNo0MRRzpalZ_WiiSLavtteOxTV0&usqp=CAU'},
    {_id:2, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.artefacta.com/media/catalog/product/1/3/137087_1.jpg?width=400&height=400&store=artefacta_storeview&image-type=image'},
    {_id:3, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.artefacta.com/media/catalog/product/1/3/137087_1.jpg?width=400&height=400&store=artefacta_storeview&image-type=image'},
    {_id:4, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.artefacta.com/media/catalog/product/1/3/137087_1.jpg?width=400&height=400&store=artefacta_storeview&image-type=image'},
    {_id:5, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.artefacta.com/media/catalog/product/1/3/137087_1.jpg?width=400&height=400&store=artefacta_storeview&image-type=image'},
    {_id:6, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.artefacta.com/media/catalog/product/1/3/137087_1.jpg?width=400&height=400&store=artefacta_storeview&image-type=image'},
    {_id:7, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.artefacta.com/media/catalog/product/1/3/137087_1.jpg?width=400&height=400&store=artefacta_storeview&image-type=image'},
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'CODIGO' },
    { field: 'producto', title: 'PRODUCTO' },
    { field: 'descripcion', title: 'DESCRIPCIÓN' },
    { field: 'precio', title: 'PRECIO' },
    { field: 'imagen', title: 'IMAGEN' },
  ];

 

}
