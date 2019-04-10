import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  valorDolar:number =3200;
  cantPeso:number=1000;
  dolar:number;
  public calcular():void{
    this.dolar=this.valorDolar.valueOf()*this.cantPeso.valueOf();
  }
  constructor() { 
    this.calcular();
  }

  ngOnInit() {
  }

}
