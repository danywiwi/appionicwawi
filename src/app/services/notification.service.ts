import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private platform: Platform) {
    this.initialize();
  }

  initialize() {
    if (this.platform.is('android')) {
      this.configureForAndroid();
    } else if (this.platform.is('ios')) {
      this.configureForIOS();
    } else if (this.platform.is('desktop')) {
      this.configureForWeb();
    }
  }

  configureForAndroid() {
    // Configuración específica para Android
    console.log('Configuración específica para Android');
  }

  configureForIOS() {
    // Configuración específica para iOS
    console.log('Configuración específica para iOS');
  }

  configureForWeb() {
    // Configuración específica para web/PWA
    console.log('Configuración específica para web/PWA');
  }
}
