import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NgbCarouselConfig]
})
export class NoticiasComponent implements OnInit {

  imagesNoticias =[
  {
    'link': '/bannernoticias',
    'ruta': '../assets/img_noticias/noticiaTransmi1.png',
    'titulo':'Transmilenio Explota',
    'descripcion':'Transmilenio explota no alcanzan los buses para la cantidad de usuarios'
  },
  {
     'link': '/bannernoticias',
     'ruta': '../assets/img_noticias/noticiaTransmi2.png',
     'titulo': 'Cambio de Rutas',
     'descripcion': 'La gran cantidad de usuarios ha llevado a que las directivas de transmielnio cambien rutas'
  },
  {
    'link': '/bannernoticias', 
    'ruta': '../assets/img_noticias/noticiaTransmi3.png',
    'titulo': 'Nuevas Estaciones',
    'descripcion':'Ante la propuesta de el metro el transmilenio se amplia con estaciones por la septima'
  }
];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000; //tiempo de duracion
    config.wrap = true; //hace que vuelva a comenzar
    config.keyboard = false;
    config.pauseOnHover = false;
  }


  ngOnInit() {
  }

}
