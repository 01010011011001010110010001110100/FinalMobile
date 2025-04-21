import { Component, AfterViewInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLoading, IonMenu, IonMenuButton, IonButtons } from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { MisSituacionesService } from 'src/app/mis-situaciones/mis-situaciones.service';
import { LeafletHelper } from 'src/app/helpers/leaflet.helper';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/icon/marker-icon-2x.png',
  iconUrl: 'assets/icon/marker-icon.png',
  shadowUrl: 'assets/icon/marker-shadow.png'
});

@Component({
  selector: 'app-mapa-situaciones',
  templateUrl: './mapa-situaciones.page.html',
  styleUrls: ['./mapa-situaciones.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLoading, CommonModule, IonMenu, IonMenuButton, IonButtons]
})
export class MapaSituacionesPage {
  loading = false;
  situaciones: any[] = [];
  public defLat: number = 18.47893;
  public defLon: number = -69.89178;

  constructor(private misSituacionesService: MisSituacionesService, ) {}

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

  async initMap() {
    const map = LeafletHelper.initMap('map', [this.defLat, this.defLon], 13);

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Obtener situaciones del historial
    this.misSituacionesService.obtenerMisSituaciones().subscribe(res => {
      if (res.exito) {
        this.situaciones = res.datos;

        for (const s of this.situaciones) {
          const marker = L.marker([s.latitud, s.longitud]).addTo(map);
          marker.bindPopup(`
            <strong>${s.titulo}</strong><br>
            ${s.descripcion}<br>
            Estado: ${s.estado}<br>
            Fecha: ${s.fecha}
          `);
        }
      }
    });

    setTimeout(() => {
      map.invalidateSize();
    }, 500);
  }
}
