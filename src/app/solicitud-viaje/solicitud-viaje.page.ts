import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-viaje',
  templateUrl: './solicitud-viaje.page.html',
  styleUrls: ['./solicitud-viaje.page.scss'],
})
export class SolicitudViajePage {
  destinoSeleccionado: string = 'puenteAlto'; // Valor inicial
  cantidadPasajeros: number = 1; // Valor inicial
  total: number = 0; // Total calculado
  nombreUsuario: string = ''; // Aquí declaras nombreUsuario

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.calcularTotal(); // Calcular el total al iniciar
  }

  calcularTotal() {
    const precioPorPasajero = this.destinoSeleccionado === 'puenteAlto' ? 3500 : 5000;
    this.total = precioPorPasajero * this.cantidadPasajeros;
  }

  enviarSolicitud() {
    console.log('Solicitud enviada con destino:', this.destinoSeleccionado, 'Total:', this.total);
    this.navCtrl.navigateForward('/viaje-activo', {
      queryParams: {
        nombre: this.nombreUsuario, // Se pasa nombreUsuario
        destino: this.destinoSeleccionado,
        total: this.total,
      },
    });
  }
}
