import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

@Component({
  selector: 'app-about',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class AcercaPage implements OnInit {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Moisés Girón Arias',
      role: 'Líder de Proyecto',
      bio: 'Especialista en desarrollo de aplicaciones móviles con más de 5 años de experiencia en tecnologías Angular e Ionic. Apasionada por crear soluciones que impacten positivamente a la comunidad.',
      image: 'assets/teamimages/MoisesG.png',
      social: {

      }
    },
    {
      id: 2,
      name: 'Richard Andres Montero Ogando',
      role: 'Desarrollador Frontend',
      bio: 'Especialista en interfaces de usuario y experiencia de usuario. Enfocado en crear aplicaciones intuitivas y accesibles para todo tipo de usuarios.',
      image: 'assets/teamimages/richard.png',
      social: {

      }
    },
    {
      id: 3,
      name: 'Francisco Daniel Henríquez Mota',
      role: 'Desarrollador Backend',
      bio: 'Experto en APIs y servicios web. Ha contribuido en múltiples proyectos de código abierto relacionados con seguridad y optimización de consultas.',
      image: 'assets/teamimages/danielH.png',
      social: {

      }
    },
    {
      id: 4,
      name: 'Hendry Gustavo Peguero Valdez',
      role: 'Diseñador UI/UX',
      bio: 'Diseñador centrado en la experiencia del usuario y la accesibilidad. Busca constantemente el equilibrio entre estética y funcionalidad en cada proyecto.',
      image: 'assets/teamimages/HendryP.png',
      social: {

      }
    },
    {
      id: 5,
      name: 'Adrian Alberto Gonzalez Familia',
      role: 'Desarrollador Backend',
      bio: 'Desarrollador backend con experiencia en la creación de APIs RESTful y microservicios. Su enfoque en la escalabilidad y el rendimiento ha sido clave en varios proyectos exitosos.',
      image: 'assets/teamimages/adrianG.png',
      social: {

      }
    }
  ];

  currentYear: number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit() {
  }

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}