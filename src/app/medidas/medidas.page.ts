import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { Medida, MedidasService } from 'src/app/services/medidas.service';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.page.html',
  styleUrls: ['./medidas.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class MedidasPage implements OnInit {
  medidas: Medida[] = [];

  constructor(private medidasService: MedidasService, private router: Router) {}

  ngOnInit() {
    this.medidasService.obtenerMedidas().subscribe(res => {
      if (res.exito) {
        this.medidas = res.datos;
      }
    });
  }

  verDetalle(medida: Medida) {
    this.router.navigate(['/medidas', medida.id], {
      state: { medida }
    });
  }
}
