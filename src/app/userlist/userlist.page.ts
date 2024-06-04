import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NavController, AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit, AfterViewInit {
  loggedInUser: string = '';

  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement> | null = null;
  private animation: Animation | undefined;  // Inicialización con undefined

  constructor(private navCtrl: NavController, private animationCtrl: AnimationController) {}

  ngOnInit() {
    // Aquí vamos a obtener el nombre de usuario que se guardó durante el inicio de sesión
    this.loggedInUser = localStorage.getItem('loggedInUser') || 'Usuario';
  }

  ngAfterViewInit() {
    if (this.card) {
      this.animation = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .duration(3000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, width: '80px' },
          { offset: 0.72, width: 'var(--width)' },
          { offset: 1, width: '240px' },
        ]);
    }
  }

  play() {
    this.animation?.play();
  }

  pause() {
    this.animation?.pause();
  }

  stop() {
    this.animation?.stop();
  }
}
