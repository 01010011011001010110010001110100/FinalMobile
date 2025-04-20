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
  IonLabel
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
    IonLabel
  ],
})
export class NoticiasEspecificasPage implements OnInit {
  noticias: NoticiasEspecificasResponse[] = [];
  loading = true;
  error = false;

  constructor(private noticiasService: NoticiasEspecificasService) {}

  ngOnInit() {
    const token = '674c5cb181174f8e7d1737bcd0147dfe';
    this.noticiasService.getNoticias(token).subscribe({
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
