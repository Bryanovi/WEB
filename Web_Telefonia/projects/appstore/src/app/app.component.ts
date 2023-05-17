import { Component } from '@angular/core';

@Component({
  selector: 'stp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appstore';
  public productos = [];

  /*
  constructor(private carritoService: CarritoService, private dataSharingService: DataSharingService) {
    // Comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {
      if (mensaje == "car_updated") {
        this.refrescarCarrito();
      }
    })
  }

  public async refrescarCarrito() {
    this.productos = await this.carritoService.obtenerProductos();
  }


  public total() {
    // Quién te conoce reduce
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }

  ngOnInit(): void {
    this.refrescarCarrito();
  }
  */
}
