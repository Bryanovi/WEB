import { Component, OnInit, ViewChild } from '@angular/core';
import { MetaDataColumn } from '../../../interfaces/metadatacolumn.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'stp-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  images: string[] = [
    'https://www.xeduced.com/wp-content/uploads/2009/01/trucos-telefonos.jpg',
    'https://th.bing.com/th/id/OIP.4eXqysfSS72eNyzYGZ0uaQHaEK?pid=ImgDet&w=1280&h=720&rs=1',
    'https://th.bing.com/th/id/OIP.4eXqysfSS72eNyzYGZ0uaQHaEK?pid=ImgDet&w=1280&h=720&rs=1'
  ];

  @ViewChild('carousel') carousel: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setTimeout(() => {
      this.carousel.next();
      this.startCarousel();
    }, 3000); // Cambia la imagen cada 3 segundos (ajústalo según tus necesidades)
  }
  }
