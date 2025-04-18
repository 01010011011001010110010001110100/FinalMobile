
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, book, videocam, map, bonfire, newspaper, alertCircle, fingerPrint, locate } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Historia', url: '/historia', icon: 'book' },
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Mapa Albergues', url: '/mapa', icon: 'map' },
    { title: 'Albergues', url: '/albergues', icon: 'bonfire' }
  ];

  public postLogged = [
    { title: 'Noticias Especificas', url: '/noticias-especificas', icon: 'newspaper' },
    { title: 'Nueva Situacion', url: '/nueva-situacion', icon: 'alert-circle' },
    { title: 'Mis Situaciones', url: '/mis-situaciones', icon: 'finger-print' },
    { title: 'Mapa Situaciones', url: '/mapa-situaciones', icon: 'locate' }
  ];

  constructor() {
    addIcons({ home, book, videocam, map, bonfire, newspaper, alertCircle, fingerPrint, locate });
  }
}
