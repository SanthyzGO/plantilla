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
    'titulo': 'TransMilenio: en marcha un plan para mejorar el servicio',
    'descripcion':'Ya comenzó el trabajo de ampliación de 73 estaciones mientras avanzamos en los diseños de las nuevas troncales.',
  },
  {
    'link': '/bannernoticias', 
    'ruta': '../assets/img_noticias/img4.jpg',
    'titulo': 'Cajera no vende pasaje',
    'descripcion':'¡El colmo! cajera de Transmilenio se niega a vender pasaje porque le pagan con monedas'
  },
  {
    'link': '/bannernoticias', 
    'ruta': '../assets/img_noticias/img5.jpg',
    'titulo': 'En marcha plan para ampliar 49 estaciones de TransMilenio',
    'descripcion':'Con una inversión de más de 20.000 millones de pesos arrancó el proceso para la ampliación de 49  estaciones de TransMilenio.'
  },
  {
    'link': '/bannernoticias', 
    'ruta': '../assets/img_noticias/img6.png',
    'titulo': 'Sobrevive',
    'descripcion':'Hombre sobrevivió luego de ser atropellado por un TM y una volqueta.',
    'publicacion':'Fecha: 13/04/2019'
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
