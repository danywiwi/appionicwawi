import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulariosenfermera',
  templateUrl: './formulariosenfermera.page.html',
  styleUrls: ['./formulariosenfermera.page.scss'],
})
export class FormulariosenfermeraPage implements OnInit {
  loggedInUser: any = null;
  sensorInfo = {
    nombre: '',
    temperatura: '',
    humedad: '',
    descontaminacionInicial: '',
    descontaminacionFinal: '',
    box: ''
  };
  temperaturas: number[] = [];
  humedades: number[] = [];

  constructor(private router: Router) { 
    this.generarListas();
  }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem('loggedInUser') || 'Usuario';

    if (this.loggedInUser !== 'Daniela') {
      this.router.navigate(['/notfound']);
    }
  }

  generarListas() {
    for (let i = 0; i <= 48; i++) {
      this.temperaturas.push(i);
    }
    for (let i = 0; i <= 69; i++) {
      this.humedades.push(i);
    }
  }

  limpiarCampos() {
    this.sensorInfo = {
      nombre: '',
      temperatura: '',
      humedad: '',
      descontaminacionInicial: '',
      descontaminacionFinal: '',
      box: '',
    };
  }

  limpiarCamposDescontaminacion() {
    this.sensorInfo.descontaminacionInicial = '';
    this.sensorInfo.descontaminacionFinal = '';
  }

  mostrarInfo() {
  console.log(this.sensorInfo);
  alert(`Bodega Material Esteril: ${this.sensorInfo.nombre}\nTemperatura: ${this.sensorInfo.temperatura} °C\nHumedad: ${this.sensorInfo.humedad}%`);
}

  mostrarInfoDescontaminacion() {
    alert(`Descontaminación Inicial: ${this.sensorInfo.descontaminacionInicial}\nDescontaminación Final: ${this.sensorInfo.descontaminacionFinal}\nBox: ${this.sensorInfo.box}`);
  }
}
