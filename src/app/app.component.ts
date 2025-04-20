
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, informationCircleSharp, informationCircleOutline, videocamOutline, videocamSharp, briefcase, briefcaseOutline, briefcaseSharp, homeOutline, homeSharp, mapOutline, mapSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Historia', url: '/historia', icon: 'briefcase' },
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Mapa', url: '/mapa', icon: 'map' },
    { title: 'Albergues', url: '/albergues', icon: 'warning' },
    { title: 'Acerca', url: '/acerca', icon: 'information-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ mailOutline,videocamOutline, mapOutline, mapSharp, homeOutline, homeSharp, briefcaseOutline,briefcaseSharp, videocamSharp, mailSharp,informationCircleSharp,informationCircleOutline, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
