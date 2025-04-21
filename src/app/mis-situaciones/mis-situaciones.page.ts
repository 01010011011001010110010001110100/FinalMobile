import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonChip
} from '@ionic/angular/standalone';
import { MisSituacionesService } from './mis-situaciones.service';

@Component({
  selector: 'mis-situaciones',
  templateUrl: './mis-situaciones.page.html',
  styleUrls: ['./mis-situaciones.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonChip
  ],
})
export class MisSituacionesPage implements OnInit {
  situaciones: any[] = [];

  constructor(private misSituacionesSvc: MisSituacionesService) {}

  ngOnInit() {
    this.misSituacionesSvc.obtenerMisSituaciones().subscribe((res) => {
      if (res.exito) {
        this.situaciones = res.datos;
      }
    });
  }

  getFotoDataUrl(base64: string) {
    return `data:image/jpeg;base64,${base64}`;
  }
}
