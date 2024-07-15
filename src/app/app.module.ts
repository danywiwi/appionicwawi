import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Capacitor } from '@capacitor/core';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA aquí
})
export class AppModule {
  constructor(private notificationService: NotificationService) {
    this.configurePlatform();
  }

  configurePlatform() {
    const platform = Capacitor.getPlatform();
    if (platform === 'android') {
      console.log('Running on Android');
      this.configureForAndroid();
    } else if (platform === 'ios') {
      console.log('Running on iOS');
      this.configureForIOS();
    } else if (platform === 'web') {
      console.log('Running on Web');
      this.configureForWeb();
    }
  }

  configureForAndroid() {
    this.notificationService.configureForAndroid();
  }

  configureForIOS() {
    this.notificationService.configureForIOS();
  }

  configureForWeb() {
    this.notificationService.configureForWeb();
  }
}
