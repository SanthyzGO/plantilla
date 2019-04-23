import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  providers: [NgbCarouselConfig] ,
  encapsulation: ViewEncapsulation.None
})
export class CarruselComponent implements OnInit {

  imagesSitios = [
    {
    'link': 'https://moovitapp.com/',
  'ruta': '../assets/img/bannerMoovit.png',
  'titulo': 'Moovit App',
  'descripcion': 'Aplicacion movit viaje por bogota'
},
  {
    'link': 'https://www.transmilenio.gov.co/',
  'ruta': '../assets/img/bannerTransmilenio.png',
  'titulo': 'Pagina oficial de transmilenio',
  'descripcion': 'Pagina oficial de transmilenio con rutas, estaciones entre otras cosas'
},
  {
    'link': 'http://movilixa.com/',
  'ruta': '../assets/img/bannerTransmiSitp.png',
  'titulo': 'TransmiSITP App',
  'descripcion': 'Aplicacion movit conoce el sistema de transmilenio desde tu celular'
},
{
  'link':'https://www.transmilenio.gov.co/publicaciones/147584/cicloparqueaderos-en-el-sistema-transmilenio/',
  'ruta':'../assets/img/bannerciclo.jpg',
  'titulo':'Cicloparqueaderos',
  'descripcion':'Conoce el funcionamiento para guardar tu bici y viajar en transmilenio'
},
{
  'link': 'https://transmichiquis.transmilenio.gov.co/',
  'ruta': '../assets/img/bannerTransmichiquis.png',
  'titulo': 'Transmichiquis',
  'descripcion': 'Hasta los mas pequeños pueden aprender sobre el sistema'
},
{
  'link': 'https://www.transmilenio.gov.co/publicaciones/146212/bibloestaciones/',
  'ruta': '../assets/img/bannerbiblio.jpg',
  'titulo': 'Biblioestaciones',
  'descripcion': 'Las bibloestaciones con servicio de préstamo de libros y recomendación de lecturas'
}];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {

  }

}
