import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medida {
  id: string;
  titulo: string;
  descripcion: string;
  foto: string;
}


@Injectable({
  providedIn: 'root'
})
export class MedidasService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/medidas_preventivas.php';

  constructor(private http: HttpClient) {}

  obtenerMedidas(): Observable<{ exito: boolean; datos: Medida[] }> {
    return this.http.get<{ exito: boolean; datos: Medida[] }>(this.apiUrl);
  }
}
