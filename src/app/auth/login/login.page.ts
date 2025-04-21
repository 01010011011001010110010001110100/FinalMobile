import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonicModule,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class LoginPage {

  form = this.fb.group({
    cedula: ['', Validators.required],
    contrasena: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  async onSubmit() {
    if (this.form.invalid) {
      this.presentToast('Por favor completa todos los campos.', 'warning');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...',
    });
    await loading.present();

    const { cedula, contrasena } = this.form.value;
    const success = await this.auth.login(cedula!, contrasena!);

    await loading.dismiss();

    if (success) {
      this.router.navigateByUrl('', { replaceUrl: true });
      console.log(this.auth.token);
    } else {
      this.presentToast('Credenciales incorrectas.', 'danger');
    }
  }

  private async presentToast(message: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      color,
    });
    toast.present();
  }
}
