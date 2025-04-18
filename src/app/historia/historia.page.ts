import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, YouTubePlayer]
})
export class HistoriaPage implements OnInit {
  videoId = 'PMW8U0SPyEo'; // Reemplaza con el ID del video real de la Defensa Civil

  constructor() { }

  ngOnInit() {
    // Cargar la API de YouTube
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }
}