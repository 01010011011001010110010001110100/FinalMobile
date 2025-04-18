import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class VideosPage implements OnInit {
  videoIds = [
    'PMW8U0SPyEo', 
    '66ReM0pvFLs', 
    '4cfUMCdpD_g'  
  ];
  
  constructor(private sanitizer: DomSanitizer) { }
  
  ngOnInit() {
  }
  
  getSafeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}