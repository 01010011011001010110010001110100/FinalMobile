import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

export const MOCK_ALBERGUES = [
    {
        ciudad: "Santo Domingo de Guzmán",
        codigo: "DO-010007",
        edificio: "Politécnico Don Bosco",
        coordinador: "Modesto Cabrera",
        telefono: "(829) 699-3290",
        capacidad: "150",
        lat: -69.901247,
        lng: 18.478692
      },
      {
        ciudad: "Santiago de los Caballeros",
        codigo: "DO-010008",
        edificio: "Instituto Politécnico de Santiago",
        coordinador: "Ana Rodríguez",
        telefono: "(809) 555-5555",
        capacidad: "200",
        lat: -70.564325,
        lng: 19.451676
      }, 
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
  

//   constructor(private http: HttpClient) {}
    constructor(){}
//   getAlbergues(): Observable<Albergue[]> {
//     return this.http.get<{ exito: boolean, datos: Albergue[] }>(this.apiUrl).pipe(
//       map(response => response.datos)
//     );
//   }
  getAlbergues(): Observable<any[]> {
    // En lugar de hacer la llamada HTTP, devuelve los datos mock
    return of(MOCK_ALBERGUES);  // 'of' crea un observable con los datos proporcionados
  }
}
