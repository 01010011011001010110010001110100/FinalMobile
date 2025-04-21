import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Miembro {
  id: string;
  foto: string;
  nombre: string;
  cargo: string;
}


@Injectable({
  providedIn: 'root'
})
export class MiembrosService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/miembros.php';

  constructor(private http: HttpClient) {}

  obtenerMiembros(): Observable<{ exito: boolean; datos: Miembro[] }> {
    return this.http.get<{ exito: boolean; datos: Miembro[] }>(this.apiUrl);
  }
}
