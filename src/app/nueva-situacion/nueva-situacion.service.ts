import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export interface ApiResponse<T> {
  exito: boolean;
  datos: T;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class NuevaSituacionService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/nueva_situacion.php';

  constructor(private http: HttpClient, private auth: AuthService) {}

  reportarSituacion(
    titulo: string,
    descripcion: string,
    fotoBase64: string,
    latitud: string,
    longitud: string
  ): Observable<ApiResponse<null>> {
    const body = new HttpParams()
      .set('token', this.auth.token)
      .set('titulo', titulo)
      .set('descripcion', descripcion)
      .set('foto', fotoBase64)
      .set('latitud', latitud)
      .set('longitud', longitud);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<ApiResponse<null>>(
      this.apiUrl,
      body.toString(),
      { headers }
    );
  }
}
