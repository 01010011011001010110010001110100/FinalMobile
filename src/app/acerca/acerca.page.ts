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
      name: 'Ana Martínez',
      role: 'Líder de Proyecto',
      bio: 'Especialista en desarrollo de aplicaciones móviles con más de 5 años de experiencia en tecnologías Angular e Ionic. Apasionada por crear soluciones que impacten positivamente a la comunidad.',
      image: 'assets/team/member1.jpg',
      social: {
        github: 'https://github.com/anamartinez',
        linkedin: 'https://linkedin.com/in/anamartinez'
      }
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      role: 'Desarrollador Frontend',
      bio: 'Especialista en interfaces de usuario y experiencia de usuario. Enfocado en crear aplicaciones intuitivas y accesibles para todo tipo de usuarios.',
      image: 'assets/team/member2.jpg',
      social: {
        github: 'https://github.com/carlosramirez',
        twitter: 'https://twitter.com/carlosramirez'
      }
    },
    {
      id: 3,
      name: 'Elena Sánchez',
      role: 'Desarrolladora Backend',
      bio: 'Experta en APIs y servicios web. Ha contribuido en múltiples proyectos de código abierto relacionados con seguridad y optimización de consultas.',
      image: 'assets/team/member3.jpg',
      social: {
        github: 'https://github.com/elenasanchez',
        linkedin: 'https://linkedin.com/in/elenasanchez'
      }
    },
    {
      id: 4,
      name: 'Miguel Torres',
      role: 'Diseñador UI/UX',
      bio: 'Diseñador centrado en la experiencia del usuario y la accesibilidad. Busca constantemente el equilibrio entre estética y funcionalidad en cada proyecto.',
      image: 'assets/team/member4.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/migueltorres',
        twitter: 'https://twitter.com/migueltorres'
      }
    },
    {
      id: 5,
      name: 'Laura Gómez',
      role: 'QA y Testing',
      bio: 'Especialista en control de calidad y pruebas automatizadas. Su atención al detalle garantiza aplicaciones robustas y libres de errores.',
      image: 'assets/team/member5.jpg',
      social: {
        github: 'https://github.com/lauragomez',
        linkedin: 'https://linkedin.com/in/lauragomez'
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