import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Medida } from '../services/medidas.service';

@Component({
  selector: 'app-medida-detalle',
  templateUrl: './medida-detalle.page.html',
  styleUrls: ['./medida-detalle.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class MedidaDetallePage {
  medida!: Medida;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.medida = nav?.extras?.state?.['medida'];
  }
}
