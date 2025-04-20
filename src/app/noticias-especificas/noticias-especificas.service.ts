import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticiasEspecificasResponse } from '../dtos/noticias-especificas.response';
import { ApiResponse } from '../dtos/api.response';


@Injectable({
  providedIn: 'root'
})
export class NoticiasEspecificasService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/noticias_especificas.php';

  constructor(private http: HttpClient) {}

  getNoticias(token: string): Observable<ApiResponse<NoticiasEspecificasResponse>> {
    const body = new HttpParams().set('token', token);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<ApiResponse<NoticiasEspecificasResponse>>(
      this.apiUrl,
      body.toString(),
      { headers }
    );
  }
}
