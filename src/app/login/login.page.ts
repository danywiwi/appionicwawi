import { Component } from '@angular/core';
import { NavController, AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = {
    username: '',
    password: ''
  };

  constructor(
    private navCtrl: NavController, 
    private alertController: AlertController,
    private menuCtrl: MenuController
  ) {}

  async ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }

  async onLogin() {
    const { username, password } = this.credentials;
    if ((username === 'Daniela' && password === '1234') || (username === 'Manuel' && password === '5678')) {
      // Guardar el nombre de usuario en el almacenamiento local
      localStorage.setItem('loggedInUser', username);
      // Login exitoso, redirigir a la página de inicio
      this.navCtrl.navigateForward('/home');
    } else {
      // Credenciales incorrectas, mostrar alerta
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
