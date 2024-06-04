import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  mostrarMenu: boolean = true; // Variable para controlar la visibilidad del menú

  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Usuarios', url: 'userlist', icon: 'people' },
    { title: 'Acerca de', url: 'about', icon: 'heart' },
    /* { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' }, */
  ];
  public labels = ['Family'];
  constructor() {}
}
