import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Si la ruta actual es la página de inicio, ocultamos el menú
      if (this.router.url === '/home') {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    });
  }
}
