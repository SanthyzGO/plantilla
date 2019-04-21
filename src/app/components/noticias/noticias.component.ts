import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NgbCarouselConfig]
})
export class NoticiasComponent implements OnInit {

  imagesNoticias =
  ['/bannernoticias', '../assets/img_noticias/noticiaTransmi1.png',
  '/bannernoticias', '../assets/img_noticias/noticiaTransmi2.png',
  '/bannernoticias', '../assets/img_noticias/noticiaTransmi3.png'
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
