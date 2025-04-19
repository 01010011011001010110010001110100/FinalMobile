import { Routes } from '@angular/router';
import { AlberguesPage } from './albergues/albergues.page';
import { MapaPage } from './mapa/mapa.page';
import { InicioPage } from './inicio/inicio.page';
import { HistoriaPage } from './historia/historia.page';
import { VideosPage } from './videos/videos.page';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'albergues', component: AlberguesPage },
  { path: 'mapa', component: MapaPage },
  { path: 'inicio', component: InicioPage },
  { path: 'historia', component: HistoriaPage },
  { path: 'videos', component: VideosPage }
];
