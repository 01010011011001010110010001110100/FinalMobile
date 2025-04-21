import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticiasEspecificasResponse } from '../dtos/noticias-especificas.response';
import { ApiResponse } from '../dtos/api.response';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class NoticiasEspecificasService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/noticias_especificas.php';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getNoticias(): Observable<ApiResponse<NoticiasEspecificasResponse[]>> {
    const body = new HttpParams().set('token', this.auth.token);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<ApiResponse<NoticiasEspecificasResponse[]>>(
      this.apiUrl,
      body.toString(),
      { headers }
    );
  }
}
