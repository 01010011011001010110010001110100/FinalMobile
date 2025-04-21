import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Miembro, MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.page.html',
  styleUrls: ['./miembros.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class MiembrosPage implements OnInit {
  miembros: Miembro[] = [];

  constructor(private miembrosService: MiembrosService) {}

  ngOnInit() {
    this.miembrosService.obtenerMiembros().subscribe(res => {
      if (res.exito) {
        this.miembros = res.datos;
      }
    });
  }
}
