import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface VideoItem {
  id: string;
  titulo: string;
  fecha: string;
  descripcion: string;
  link: string; 
}

export interface ApiResponse {
  exito: boolean;
  datos: VideoItem[];
  mensaje: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/videos.php';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<VideoItem[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => {
        if (response.exito) {
          return response.datos;
        } else {
          throw new Error(response.mensaje || 'Error al cargar los videos');
        }
      })
    );
  }
}