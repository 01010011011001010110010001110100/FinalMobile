import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../dtos/api.response';
import { SituacionResponse } from '../dtos/situacion.response';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MisSituacionesService {
  private url = 'https://adamix.net/defensa_civil/def/situaciones.php';

  constructor(private http: HttpClient, private auth: AuthService) {}

  obtenerMisSituaciones(): Observable<ApiResponse<SituacionResponse[]>> {
    const body = new HttpParams().set('token', this.auth.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<ApiResponse<SituacionResponse[]>>(this.url, body.toString(), { headers });
  }
}