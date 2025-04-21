import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonButton,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonButtons
} from '@ionic/angular/standalone';
import { NoticiasEspecificasResponse } from '../dtos/noticias-especificas.response';
import { NoticiasEspecificasService } from './noticias-especificas.service';

@Component({
  selector: 'noticias-especificas',
  templateUrl: './noticias-especificas.page.html',
  styleUrls: ['./noticias-especificas.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonSpinner,
    IonButton,
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonMenu,
    IonMenuButton,
    IonButtons
  ],
})
export class NoticiasEspecificasPage implements OnInit {
  noticias: NoticiasEspecificasResponse[] = [];
  loading = true;
  error = false;

  constructor(private noticiasService: NoticiasEspecificasService) {}

  ngOnInit() {
    this.noticiasService.getNoticias().subscribe({
      next: (res) => {
        if (res.exito) {
          this.noticias = res.datos;
        } else {
          console.error('Error backend:', res.mensaje);
          this.error = true;
        }
      },
      error: (err) => {
        console.error(err);
        this.error = true;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
