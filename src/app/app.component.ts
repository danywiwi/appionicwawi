import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Salir', url: 'login', icon: 'log-in' },
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Lista de Usuarios', url: 'userlist', icon: 'list' },
    { title: 'Acerca de', url: 'about', icon: 'information-circle' },
    { title: 'Formularios de enfermera', url: 'formulariosenfermera', icon: 'medkit' },
    // Añade aquí todas las páginas necesarias
  ];

  constructor() {}
}
