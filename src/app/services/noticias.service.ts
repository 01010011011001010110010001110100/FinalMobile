import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Noticia {
  id: string;
  fecha: string;
  titulo: string;
  contenido: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/noticias.php';

  constructor(private http: HttpClient) {}

  obtenerNoticias(): Observable<{ exito: boolean; datos: Noticia[] }> {
    return this.http.get<{ exito: boolean; datos: Noticia[] }>(this.apiUrl);
  }
}
