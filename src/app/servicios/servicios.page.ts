
import { ServiciosService, Servicio } from 'src/app/services/servicios.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ServiciosPage implements OnInit {

  servicios: Servicio[] = [];

  constructor(private servicioService: ServiciosService) {}

  ngOnInit() {
    this.servicioService.obtenerServicios().subscribe(res => {
      if (res.exito) {
        this.servicios = res.datos;
      }
    });
  }

}
