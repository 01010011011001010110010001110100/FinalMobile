import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-voluntario',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})
export class VoluntarioPage {
  form: FormGroup;
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private toastCtrl: ToastController) {
    this.form = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      clave: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  registrar() {
    this.cargando = true;

    const body = new HttpParams()
      .set('cedula', this.form.value.cedula)
      .set('nombre', this.form.value.nombre)
      .set('apellido', this.form.value.apellido)
      .set('clave', this.form.value.clave)
      .set('correo', this.form.value.correo)
      .set('telefono', this.form.value.telefono);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.http.post<any>('https://adamix.net/defensa_civil/def/registro.php', body.toString(), { headers })
      .subscribe({
        next: async (resp) => {
          this.cargando = false;
          const toast = await this.toastCtrl.create({
            message: resp.mensaje,
            duration: 2000,
            color: 'danger',
          });
          toast.present();
          if (resp.exito) {
            const toast = await this.toastCtrl.create({
              message: 'Se creo con exito',
              duration: 2000,
              color: 'success',
            });
            toast.present();
            this.form.reset();
          }
        },
        error: async () => {
          const toast = await this.toastCtrl.create({
            message: 'Ocurrio un error creando voluntario',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
          this.cargando = false;
        }
      });
  }
}