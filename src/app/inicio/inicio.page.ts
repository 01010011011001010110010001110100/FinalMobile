import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
// Registrar Swiper con elementos personalizados
register();

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPage implements OnInit {
  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;
  
  swiperOptions = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    slidesPerView: 1,
    pagination: true
  };
  
  sliderImages = [
    {
      src: 'assets/images/1.png',
      alt: 'Defensa Civil - Imagen 1'
    },
    {
      src: 'assets/images/2.png',
      alt: 'Defensa Civil - Imagen 2'
    },
    {
      src: 'assets/images/3.png',
      alt: 'Defensa Civil - Imagen 3'
    },
    {
      src: 'assets/images/4.png',
      alt: 'Defensa Civil - Imagen 4'
    }
  ];
  
  constructor() {}
  
  ngOnInit() {}
  
  slideNext() {
    if (this.swiperRef) {
      this.swiperRef.nativeElement.swiper.slideNext();
    }
  }
  
  slidePrev() {
    if (this.swiperRef) {
      this.swiperRef.nativeElement.swiper.slidePrev();
    }
  }
}