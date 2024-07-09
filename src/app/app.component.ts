import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: 'folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: 'folder/outbox', icon: 'paper-plane' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Userlist', url: 'userlist', icon: 'list' },
    { title: 'About', url: 'about', icon: 'information-circle' },
    { title: 'Formulariosenfermera', url: 'formulariosenfermera', icon: 'document' },
    // Añade aquí todas las páginas necesarias
  ];

  constructor() {}
}
