import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { AlberguesService } from '../albergues/albergues.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent 
} from '@ionic/angular/standalone';

// Solución para el problema del ícono por defecto (ignorando TypeScript)
(L.Icon.Default.prototype as any)._getIconUrl = function () {};

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/icon/marker-icon-2x.png',
  iconUrl: 'assets/icon/marker-icon.png',
  shadowUrl: 'assets/icon/marker-shadow.png'
});

@Component({
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader, 
    IonToolbar,
    IonTitle,
    IonContent,
  ],
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
})
export class MapaPage implements AfterViewInit {
  private map: any;

  constructor(private alberguesService: AlberguesService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([18.47893, -69.89178], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.alberguesService.getAlbergues().subscribe(albergues => {
      albergues.forEach(a => {
        L.marker([parseFloat(a.lng), parseFloat(a.lat)])
          .addTo(this.map)
          .bindPopup(`<strong>${a.edificio}</strong><br>${a.ciudad}<br>Capacidad: ${a.capacidad}`);
      });
    });
  }
}
