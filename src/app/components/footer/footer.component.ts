import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  fecha:any;
  mostrar = false;
  
  constructor(){
    this.fecha = new Date();
  }
 
  

}
