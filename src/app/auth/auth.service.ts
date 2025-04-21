import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';
import { UserResponse } from '../dtos/user.response';
import { ApiResponse } from '../dtos/api.response';

const API_URL = 'https://adamix.net/defensa_civil/def/iniciar_sesion.php';
const STORAGE_KEY = 'usuario';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private storage = inject(Storage);
  private usuarioSubject = new BehaviorSubject<UserResponse | null>(null);

  usuario$ = this.usuarioSubject.asObservable();

  constructor() {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create();
    const usuario = await this.storage.get(STORAGE_KEY);
    if (usuario) {
      this.usuarioSubject.next(usuario);
    }
  }

  async login(cedula: string, contrasena: string): Promise<boolean> {
    try {
      const body = new HttpParams()
        .set('cedula', cedula)
        .set('clave', contrasena);

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      const res = await this.http
        .post<ApiResponse<UserResponse>>(API_URL, body.toString(), { headers })
        .toPromise();

      if (res?.exito) {
        await this.storage.set(STORAGE_KEY, res.datos);
        this.usuarioSubject.next(res.datos);
        return true;
      }

      return false;
    } catch (err) {
      console.error('Error en login:', err);
      return false;
    }
  }

  async logout() {
    await this.storage.remove(STORAGE_KEY);
    this.usuarioSubject.next(null);
  }

  get usuarioActual(): UserResponse | null {
    return this.usuarioSubject.value;
  }

  get token(): string | '' {
    return this.usuarioSubject.value?.token ?? '';
  }

}
