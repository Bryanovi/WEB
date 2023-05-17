import { Component } from '@angular/core';
import { MetaDataColumn } from '../../../interfaces/metadatacolumn.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'stp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  registros:any[] = [
    {_id:1, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://www.artefacta.com/media/catalog/product/1/3/137087_1.jpg?width=400&height=400&store=artefacta_storeview&image-type=image'},
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

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(private dialog: MatDialog) {
    this.cargarClientes();
  }

  cargarClientes() {
    this.data = this.registros;
    this.totalRegistros = this.data.length;
  }

  abrirFormulario(fila: any = null) {
    const opciones = {
      panelClass: 'panel-container',
      disableClose: true,
      data: fila,
    };
}
}
