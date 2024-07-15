import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  apiKey: string = 'AIzaSyACjmURag-Q-Eyh5Ek4bZbvdcMjRs-KYvM';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createMap();
    }, 500);
  }
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;
  
  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: this.apiKey,
      config: {
        center: {
          lat: -38.731635,
          lng: -72.617445,
        },
        zoom: 10,
      },
    });

    this.addMarker(-38.731635, -72.617445); 
  }

  async addMarker(lat: number, lng: number) {
    await this.newMap.addMarker({
      coordinate: {
        lat: -38.731902,
        lng: -72.617411,
      },
      title: 'Ubicacion',
      snippet: 'Aquí está el marcador!',
    });
  }
}