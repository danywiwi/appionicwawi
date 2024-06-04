import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loggedInUser: string;
  userInfo = {
    nombre: '',
    apellido: '',
    nivelEducacion: '',
    fechaNacimiento: ''
  };
  datetime: string = ''; // Añadir esta línea para definir la propiedad datetime

  constructor(private alertController: AlertController, private navCtrl: NavController) {
    this.loggedInUser = ''; // Inicializar en el constructor
  }

  ngOnInit() {
    // Supongamos que estamos guardando el nombre de usuario en el almacenamiento local después del login
    this.loggedInUser = localStorage.getItem('loggedInUser') || 'Usuario';
  }

  limpiarCampos() {
    this.userInfo = {
      nombre: '',
      apellido: '',
      nivelEducacion: '',
      fechaNacimiento: ''
    };
    this.datetime = ''; // Limpiar el campo datetime también
  }

  async mostrarInfo() {
    const alert = await this.alertController.create({
      header: 'Información del Usuario',
      message: `Nombre: ${this.userInfo.nombre} Apellido: ${this.userInfo.apellido}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
