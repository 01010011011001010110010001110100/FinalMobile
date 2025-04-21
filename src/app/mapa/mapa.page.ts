import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { AlberguesService } from '../albergues/albergues.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonLoading,
  IonMenu,
  IonMenuButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { LeafletHelper } from '../helpers/leaflet.helper';

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
    IonLoading,
    IonMenu,
    IonMenuButton,
    IonButtons,
  ],
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
})
export class MapaPage {
  loading = false;
  public defLat: number = 18.47893;
  public defLon: number = -69.89178;

  constructor(private alberguesService: AlberguesService) {}

  ionViewDidEnter() {
    this.loading = true;
    setTimeout(() => {
      this.initMap();
      this.loading = false;
    }, 1000);
  }

  ionViewWillLeave() {
    LeafletHelper.destroyMap();
  }

  private initMap(): void {
    const map = LeafletHelper.initMap('map', [this.defLat, this.defLon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    this.alberguesService.getAlbergues().subscribe(albergues => {
      albergues.forEach(a => {
        L.marker([parseFloat(a.lng), parseFloat(a.lat)])
          .addTo(map)
          .bindPopup(`<strong>${a.edificio}</strong><br>${a.ciudad}<br>Capacidad: ${a.capacidad}`);
      });
    });

    setTimeout(() => {
      map.invalidateSize();
    }, 500);
  }
}
