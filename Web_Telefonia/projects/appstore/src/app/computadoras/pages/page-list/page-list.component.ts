import { Component } from '@angular/core';

@Component({
  selector: 'stp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  registros:any[] = [
    {_id:1, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/pdp/desktops/matestation-x/huawei-matestation-x-kv.webp'},
    {_id:2, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/pdp/desktops/matestation-x/huawei-matestation-x-kv.webp'},
    {_id:3, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/pdp/desktops/matestation-x/huawei-matestation-x-kv.webp'},
    {_id:4, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/pdp/desktops/matestation-x/huawei-matestation-x-kv.webp'},
    {_id:5, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/pdp/desktops/matestation-x/huawei-matestation-x-kv.webp'},
    {_id:6, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/pdp/desktops/matestation-x/huawei-matestation-x-kv.webp'},
    {_id:7, producto: 'ACER NITRO 5', descripcion:'ACER NITRO 5 Gamer Intel Core i7-11 GEN 512GB SSD 8GB RAM4GB Nvidia GeForce RTX 3050 15,6″', precio:'1,049.99', imagen:'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/pdp/desktops/matestation-x/huawei-matestation-x-kv.webp'},
  ]
}
