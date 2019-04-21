import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  providers: [NgbCarouselConfig] 
})
export class CarruselComponent implements OnInit {

  imagesSitios = 
  [{'link':'https://moovitapp.com/','ruta':'../assets/img/bannerMoovit.png','titulo':'Moovit App','descripcion':'Aplicacion movit viaje por bogota'},
  {'link':'https://www.transmilenio.gov.co/','ruta':'../assets/img/bannerTransmilenio.png','titulo':'Pagina oficial de transmilenio','descripcion':'Pagina oficial de transmilenio con rutas, estaciones entre otras cosas'}, 
  {'link':'http://movilixa.com/','ruta':'../assets/img/bannerTransmiSitp.png','titulo':'TransmiSITP App','descripcion':'Aplicacion movit conoce el sistema de transmilenio desde tu celular'}];

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
