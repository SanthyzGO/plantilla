import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 mostrar = true;
 persona:any = {
   nombre: "Jhon",
   apellido : "mendez"
 }

 public myToogle(){
 this.mostrar = false;
 }


//estructura de ngFor

troncales : string [] = ["NQS","NORTE","SUR"];
 
troncalSel: any = 1;

rutas: any[] = ["calle1","calle2","calle3","calle4","calle5","calle6"];

public seleccion(valor){
 console.log(valor);
}

/*
$('select').change(function(){    
 // document.getElementById("loc").innerHTML="You selected: "+document.getElementById("se").value;  
  });*/ 
}
