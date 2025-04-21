import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { AuthService } from '../auth/auth.service';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage {
  form: FormGroup;
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private auth: AuthService, private toastCtrl: ToastController) {
    this.form = this.fb.group({
      clave_anterior: ['', Validators.required],
      clave_nueva: ['', Validators.required],
    });
  }

  async cambiarClave() {
    this.cargando = true;

    const body = new HttpParams()
      .set('token', this.auth.token)
      .set('clave_anterior', this.form.value.clave_anterior)
      .set('clave_nueva', this.form.value.clave_nueva);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.http.post<any>('https://adamix.net/defensa_civil/def/cambiar_clave.php', body.toString(), { headers })
      .subscribe({
        next: async (resp) => {
          const toast = await this.toastCtrl.create({
            message: resp.mensaje,
            duration: 2000,
            color: resp.exito ? 'success' : 'danger',
          });
          toast.present();
          this.cargando = false;
        },
        error: async (err) => {
          const toast = await this.toastCtrl.create({
            message: 'Ocurrio un error cambiando password',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
          this.cargando = false;
        }
      });
  }
}