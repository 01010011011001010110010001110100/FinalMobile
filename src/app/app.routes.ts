import { Routes } from '@angular/router';
import { AlberguesPage } from './albergues/albergues.page';
import { MapaPage } from './mapa/mapa.page';

export const routes: Routes = [
  { path: '', redirectTo: 'albergues', pathMatch: 'full' },
  { path: 'albergues', component: AlberguesPage },
  { path: 'mapa', component: MapaPage }
];
