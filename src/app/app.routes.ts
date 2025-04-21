import { Routes } from '@angular/router';
import { AlberguesPage } from './albergues/albergues.page';
import { MapaPage } from './mapa/mapa.page';
import { InicioPage } from './inicio/inicio.page';
import { HistoriaPage } from './historia/historia.page';
import { VideosPage } from './videos/videos.page';
import { NoticiasEspecificasPage } from './noticias-especificas/noticias-especificas.page';
import { NuevaSituacionPage } from './nueva-situacion/nueva-situacion.page';
import { MisSituacionesPage } from './mis-situaciones/mis-situaciones.page';
import { MapaSituacionesPage } from './mapa-situaciones/mapa-situaciones/mapa-situaciones.page';
import { AcercaPage } from './acerca/acerca.page';
import { ServiciosPage } from './servicios/servicios.page';
import { LoginPage } from './auth/login/login.page';
import { NoticiasPage } from './noticias/noticias.page';
import { MedidasPage } from './medidas/medidas.page';
import { MiembrosPage } from './miembros/miembros.page';
import { MedidaDetallePage } from './medida-detalle/medida-detalle.page';
import { VoluntarioPage } from './voluntario/voluntario.page';
import { ChangePasswordPage } from './change-password/change-password.page';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'albergues', component: AlberguesPage },
  { path: 'mapa', component: MapaPage },
  { path: 'inicio', component: InicioPage },
  { path: 'historia', component: HistoriaPage },
  { path: 'videos', component: VideosPage },
  { path: 'noticias-especificas', component: NoticiasEspecificasPage },
  { path: 'nueva-situacion', component: NuevaSituacionPage },
  { path: 'mis-situaciones', component: MisSituacionesPage },
  { path: 'mapa-situaciones', component: MapaSituacionesPage },
  { path: 'acerca', component: AcercaPage },
  { path: 'servicios', component: ServiciosPage },
  { path: 'login', component: LoginPage },
  { path: 'noticias', component: NoticiasPage },
  { path: 'medidas', component: MedidasPage },
  { path: 'medidas/:id', component: MedidaDetallePage },
  { path: 'miembros', component: MiembrosPage },
  { path: 'change-password', component: ChangePasswordPage },
  { path: 'voluntario', component: VoluntarioPage },


];
