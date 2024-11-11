import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-viaje-activo',
  templateUrl: './viaje-activo.page.html',
  styleUrls: ['./viaje-activo.page.scss'],
})
export class ViajeActivoPage implements OnInit {
  destinoSeleccionado: string = '';
  total: number = 0;
  nombreUsuario: string = '';
  mapUrl!: SafeResourceUrl; // Usando el operador '!' para garantizar que se inicializará

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.nombreUsuario = params['nombre'] || 'Usuario';
      this.destinoSeleccionado = params['destino'];
      this.total = params['total'];

      // Genera la URL segura
      const url = this.destinoSeleccionado === 'puenteAlto'
        ? 'https://www.google.com/maps/embed?pb=puenteAltoUrl'
        : 'https://www.google.com/maps/embed?pb=maipuUrl';

      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }
}
