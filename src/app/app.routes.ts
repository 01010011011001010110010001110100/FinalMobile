import { Routes } from '@angular/router';
import { AlberguesPage } from './albergues/albergues.page';
import { MapaPage } from './mapa/mapa.page';

export const routes: Routes = [
  { path: '', redirectTo: 'albergues', pathMatch: 'full' },
  { path: 'albergues', component: AlberguesPage },
  { path: 'mapa', component: MapaPage },  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'historia',
    loadComponent: () => import('./historia/historia.page').then( m => m.HistoriaPage)
  },
  {
    path: 'videos',
    loadComponent: () => import('./videos/videos.page').then( m => m.VideosPage)
  }

];
