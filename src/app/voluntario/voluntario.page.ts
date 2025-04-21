import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
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
  mensaje: string = '';
  cargando: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
    this.mensaje = '';

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
        next: (resp) => {
          this.mensaje = resp.mensaje;
          this.cargando = false;
          if (resp.exito) {
            this.form.reset();
          }
        },
        error: () => {
          this.mensaje = 'Error al conectar con el servidor.';
          this.cargando = false;
        }
      });
  }
}