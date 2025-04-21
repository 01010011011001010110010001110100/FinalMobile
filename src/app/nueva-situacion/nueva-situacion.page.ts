import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonInput,
  IonTextarea,
  LoadingController,
  ToastController,
  IonMenu,
  IonMenuButton,
  IonButtons
} from '@ionic/angular/standalone';
import { NuevaSituacionService } from './nueva-situacion.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { addIcons } from 'ionicons';
import { camera, location } from 'ionicons/icons';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'nueva-situacion',
  templateUrl: './nueva-situacion.page.html',
  styleUrls: ['./nueva-situacion.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
    IonInput,
    IonTextarea,
    IonMenu,
    IonMenuButton,
    IonButtons
  ],
})
export class NuevaSituacionPage {
  titulo = '';
  descripcion = '';
  fotoBase64: string | null | undefined = null;
  latitud = '';
  longitud = '';
  loading = false;

  constructor(
    private situacionSvc: NuevaSituacionService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private auth: AuthService
  ) {
    addIcons({ camera, location });
  }

  async capturarFoto() {
    const photo = await Camera.getPhoto({
      quality: 60,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
  
    if (!photo.webPath) {
      this.fotoBase64 = null;
      return;
    }
  
    const img = new Image();
    img.src = photo.webPath;
  
    await new Promise((resolve) => {
      img.onload = () => resolve(null);
    });
  
    const canvas = document.createElement('canvas');
    const maxWidth = 800;
    const scale = maxWidth / img.width;
  
    canvas.width = maxWidth;
    canvas.height = img.height * scale;
  
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
  
    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
    this.fotoBase64 = dataUrl.split(',')[1];
  }
  

  async obtenerUbicacion() {
    const pos = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });
    this.latitud = pos.coords.latitude.toString();
    this.longitud = pos.coords.longitude.toString();
  }

  async enviar() {
    if (
      !(
        this.titulo &&
        this.descripcion &&
        this.fotoBase64 &&
        this.latitud &&
        this.longitud
      )
    ) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, completa todos los campos.',
        duration: 2000,
        color: 'warning',
      });
      return toast.present();
    }

    this.loading = true;
    const load = await this.loadingCtrl.create({ message: 'Reportando...' });
    await load.present();

    this.situacionSvc
      .reportarSituacion(
        this.titulo,
        this.descripcion,
        this.fotoBase64,
        this.latitud,
        this.longitud
      )
      .subscribe({
        next: async (res) => {
          await load.dismiss();
          this.loading = false;
          const toast = await this.toastCtrl.create({
            message: res.exito ? '¡Reporte enviado!' : `Error: ${res.mensaje}`,
            duration: 2000,
            color: res.exito ? 'success' : 'danger',
          });
          toast.present();
          if (res.exito) {
            this.titulo =
              this.descripcion =
              this.fotoBase64 =
              this.latitud =
              this.longitud =
                '';
          }
        },
        error: async (err) => {
          await load.dismiss();
          this.loading = false;
          const toast = await this.toastCtrl.create({
            message: 'Error de red, inténtalo más tarde.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        },
      });
  }
}
