import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Noticia, NoticiasService } from 'src/app/services/noticias.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class NoticiasPage implements OnInit {
  noticias: Noticia[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.noticiasService.obtenerNoticias().subscribe(res => {
      if (res.exito) {
        this.noticias = res.datos;
      }
    });
  }
}
