import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/servicios.php';

  constructor(private http: HttpClient) {}

  obtenerServicios(): Observable<{ exito: boolean, datos: Servicio[] }> {
    return this.http.get<{ exito: boolean, datos: Servicio[] }>(this.apiUrl);
  }
}
