import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common'; // Para directivas estructurales
import { AlberguesService } from './albergues.service';


interface Albergue {
  ciudad: string;
  codigo: string;
  edificio: string;
  coordinador: string;
  telefono: string;
  capacidad: string;
  lat: string;
  lng: string;
}

@Component({
  selector: 'app-albergues',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, NgIf, NgFor],
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss']
})

export class AlberguesPage {
  // tu lógica aquí
  albergues: Albergue[] = [];
  filtro = '';

  constructor(private alberguesService: AlberguesService) {}

  ngOnInit() {
    this.alberguesService.getAlbergues().subscribe(data => {
      console.log('Datos recibidos: ', data);
      this.albergues = data;
    });
  }

  get alberguesFiltrados() {
    console.log('Filtro actual: ', this.filtro); // Ver qué filtro se está aplicando
    return this.albergues.filter(a =>
      (a.ciudad && a.ciudad.toLowerCase().includes(this.filtro.toLowerCase())) ||
      (a.edificio && a.edificio.toLowerCase().includes(this.filtro.toLowerCase()))
    );
  }
  
}
