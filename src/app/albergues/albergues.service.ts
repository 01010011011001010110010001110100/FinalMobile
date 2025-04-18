import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export const MOCK_ALBERGUES = [
    { id: 1, nombre: 'Albergue 1', lat: 19.432608, lng: -99.133209 },
    { id: 2, nombre: 'Albergue 2', lat: 19.433608, lng: -99.132209 },
    { id: 3, nombre: 'Albergue 3', lat: 19.431608, lng: -99.134209 }
  ];

export interface Albergue {
  ciudad: string;
  codigo: string;
  edificio: string;
  coordinador: string;
  telefono: string;
  capacidad: string;
  lat: string;
  lng: string;
}

@Injectable({
  providedIn: 'root'
})


export class AlberguesService {
  private apiUrl = 'https://adamix.net/defensa_civil/def/albergues.php';
  

  constructor(private http: HttpClient) {}

  getAlbergues(): Observable<Albergue[]> {
    return this.http.get<{ exito: boolean, datos: Albergue[] }>(this.apiUrl).pipe(
      map(response => response.datos)
    );
  }
}
