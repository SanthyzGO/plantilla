import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: "app-imagenes",
  templateUrl: "./imagenes.component.html",
  styleUrls: ["./imagenes.component.css"]
})
export class ImagenesComponent implements OnInit {
  imagen: any;
  imagenes: any;
  datos:any;
  etiquetas: string[]=["dogs","cats","birds"]
  mostrar() {
    $.getJSON(
      `http://api.flickr.com/services/feeds/photos_public.gne?tags=${this.datos}&tagmode=any&format=json&jsoncallback=?`,
      (data: any) => {
        // this.imagen=data.items;c    onsole.log(this.imagen);
        // $.each(data.items, function(i,item){
        //   this.imagenes=item.media.m;});
        this.loadData(data);
      }
    );
  }
  constructor() {}
  public selected(dato:any){
    this.datos = dato;
    console.log(dato);
    this.mostrar();
  }
  loadData(data: any): void {
    this.imagen = data.items;
  }
  ngOnInit() {
    this.mostrar();
  }
}
