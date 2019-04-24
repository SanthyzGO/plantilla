import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannernoticias',
  templateUrl: './bannernoticias.component.html',
  styleUrls: ['./bannernoticias.component.css']
})
export class BannernoticiasComponent implements OnInit {
  bannerNoticias =[
    {
      'link': 'http://especiales.semana.com/especiales/por-que-exploto-transmilenio/index.html',
      'ruta': '../assets/img_noticias/noticiaTransmi1.png',
      'titulo':'Transmilenio Explota',
      'descripcion':'Transmilenio explota no alcanzan los buses para la cantidad de usuarios',
      'publicacion':'Fecha: 07/12/2018'
    },
    {
       'link': 'http://www.tullaveplus.com/web/public/detalle-rutas/-/asset_publisher/tE0z/content/si-eres-usuario-del-portal-de-las-americas-ten-presente-los-siguientes-cambios-en-rutas-alimentadoras?redirect=http%3A%2F%2Fwww.tullaveplus.com%2Fweb%2Fpublic%2Fdetalle-rutas%3Fp_p_id%3D101_INSTANCE_tE0z%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-3%26p_p_col_count%3D3',
       'ruta': '../assets/img_noticias/noticiaTransmi2.png',
       'titulo': 'Cambio de Rutas',
       'descripcion': 'La gran cantidad de usuarios ha llevado a que las directivas de transmielnio cambien rutas',
       'publicacion':'Fecha: 14/02/2019'
    },
    {
      'link': '/bannernoticias', 
      'ruta': '../assets/img_noticias/noticiaTransmi3.png',
      'titulo': 'TransMilenio: en marcha un plan para mejorar el servicio',
      'descripcion':'Ya comenzó el trabajo de ampliación de 73 estaciones mientras avanzamos en los diseños de las nuevas troncales.',
      'publicacion':'Fecha: 01/03/2019'
    },
    {
      'link': 'https://noticias.canalrcn.com/nacional-bogota/el-colmo-cajera-transmilenio-se-niega-vender-pasaje-porque-le-pagan-monedas', 
      'ruta': '../assets/img_noticias/img4.jpg',
      'titulo': 'Cajera no vende pasaje',
      'descripcion':'¡El colmo! cajera de Transmilenio se niega a vender pasaje porque le pagan con monedas',
      'publicacion':'Fecha: 20/04/2019'
    },
    {
      'link': 'http://www.bogota.gov.co/temas-de-ciudad/movilidad/ampliacion-49-estaciones-de-transmilenio', 
      'ruta': '../assets/img_noticias/img5.jpg',
      'titulo': 'En marcha plan para ampliar 49 estaciones de TransMilenio',
      'descripcion':'Con más de 20.000 millones de pesos arrancó el proceso para la ampliación de 49 estaciones de TransMilenio.',
      'publicacion':'Fecha: 13/04/2019'
    },
    {
      'link': 'https://www.eltiempo.com/bogota/joven-sobrevivio-luego-de-ser-atropellado-por-un-transmilenio-y-una-volqueta-en-usme-352162', 
      'ruta': '../assets/img_noticias/img6.png',
      'titulo': 'Sobrevive',
      'descripcion':'Hombre sobrevivió luego de ser atropellado por un TM y una volqueta.',
      'publicacion':'Fecha: 13/04/2019'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
