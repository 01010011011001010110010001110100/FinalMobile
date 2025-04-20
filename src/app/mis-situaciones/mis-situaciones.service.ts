import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../dtos/api.response';
import { SituacionResponse } from '../dtos/situacion.response';

@Injectable({
  providedIn: 'root'
})
export class MisSituacionesService {
  private url = 'https://adamix.net/defensa_civil/def/situaciones.php';

  constructor(private http: HttpClient) {}

  obtenerMisSituaciones(token: string): Observable<ApiResponse<SituacionResponse[]>> {
    const body = new HttpParams().set('token', token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<ApiResponse<SituacionResponse[]>>(this.url, body.toString(), { headers });
  }
}