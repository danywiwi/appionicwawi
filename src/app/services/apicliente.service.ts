import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  private apiUrl = 'https://www.mods.cl/bodegas.php'; // URL de la API

  constructor(private http: HttpClient) { }

  // Método para obtener la lista de bodegas
  getBodegas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
