import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannernoticias',
  templateUrl: './bannernoticias.component.html',
  styleUrls: ['./bannernoticias.component.css']
})
export class BannernoticiasComponent implements OnInit {
  bannerNoticias =[
    {
      'link': '/bannernoticias',
      'ruta': '../assets/img_noticias/noticiaTransmi1.png',
      'titulo':'Transmilenio Explota',
      'descripcion':'Transmilenio explota no alcanzan los buses para la cantidad de usuarios',
      'publicacion':'Hace 3 minutos'
    },
    {
       'link': '/bannernoticias',
       'ruta': '../assets/img_noticias/noticiaTransmi2.png',
       'titulo': 'Cambio de Rutas',
       'descripcion': 'La gran cantidad de usuarios ha llevado a que las directivas de transmielnio cambien rutas',
       'publicacion':'Hace 4 Dias'
    },
    {
      'link': '/bannernoticias', 
      'ruta': '../assets/img_noticias/noticiaTransmi3.png',
      'titulo': 'Nuevas Estaciones',
      'descripcion':'Ante la propuesta de el metro el transmilenio se amplia con estaciones por la septima',
      'publicacion':'Hace 20 minutos'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
