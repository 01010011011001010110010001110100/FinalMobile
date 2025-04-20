import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { VideosService, VideoItem } from './videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, HttpClientModule]
})
export class VideosPage implements OnInit {
  videos: VideoItem[] = [];
  loading: boolean = true;
  error: string | null = null;
 
  constructor(
    private sanitizer: DomSanitizer,
    private videosService: VideosService
  ) { }
 
  ngOnInit() {
    this.loadVideos();
  }
  
  loadVideos() {
    this.loading = true;
    this.videosService.getVideos().subscribe({
      next: (data) => {
        this.videos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los videos:', err);
        this.error = 'No se pudieron cargar los videos. Por favor, intenta de nuevo más tarde.';
        this.loading = false;
      }
    });
  }
 
  getSafeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}