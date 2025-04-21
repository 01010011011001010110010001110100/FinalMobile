
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, peopleCircleOutline, logIn, logOut, book, videocam, map as mapIcon, bonfire, newspaper, alertCircle, fingerPrint, locate, informationCircle, reader } from 'ionicons/icons';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppPage } from './dtos/app-page.dto';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, CommonModule, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  usuario$ = this.auth.usuario$;

  public appPages: AppPage[] = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Iniciar Sesion', url: '/login', icon: 'log-in' },
    { title: 'Historia', url: '/historia', icon: 'book' },
    { title: 'Servicios', url: '/servicios', icon: 'reader' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Mapa Albergues', url: '/mapa', icon: 'map-icon' },
    { title: 'Medidas preventivas', url: '/medidas', icon: 'alert-circle' },
    { title: 'Miembros', url: '/miembros', icon: 'people-circle-outline' },
    { title: 'Albergues', url: '/albergues', icon: 'bonfire' },
    { title: 'Acerca', url: '/acerca', icon: 'information-circle' }
  ];

  public pageToShow$: Observable<AppPage[]>;

  public postLogged = [
    { title: 'Noticias Especificas', url: '/noticias-especificas', icon: 'newspaper' },
    { title: 'Nueva Situacion', url: '/nueva-situacion', icon: 'alert-circle' },
    { title: 'Mis Situaciones', url: '/mis-situaciones', icon: 'finger-print' },
    { title: 'Mapa Situaciones', url: '/mapa-situaciones', icon: 'locate' }
  ];

  constructor(public auth: AuthService, private router: Router) {
    this.pageToShow$ = this.usuario$.pipe(
      map((usuario: any) => usuario
        ? this.appPages.filter(p => p.url !== '/login')
        : this.appPages
      )
    );
    addIcons({ home, logIn, logOut, book, videocam, mapIcon, bonfire, newspaper, alertCircle, fingerPrint, locate, informationCircle, reader, peopleCircleOutline });
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigateByUrl('', { replaceUrl: true });
    });
  }
}
