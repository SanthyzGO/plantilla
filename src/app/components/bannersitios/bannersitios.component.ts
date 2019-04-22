import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannersitios',
  templateUrl: './bannersitios.component.html',
  styleUrls: ['./bannersitios.component.css']
})
export class BannersitiosComponent implements OnInit {
  bannerSitios = [
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
    'link':'http://movilixa.com/',
  'ruta':'../assets/img/bannerTransmiSitp.png',
  'titulo':'TransmiSITP App',
  'descripcion':'Aplicacion movit conoce el sistema de transmilenio desde tu celular'
}];
  constructor() { }

  ngOnInit() {
  }

}
