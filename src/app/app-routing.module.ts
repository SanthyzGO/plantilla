import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversorComponent } from './components/conversor/conversor.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';

const routes: Routes = [
  {path:'conversor',component:ConversorComponent},
  {path:'imagenes',component:ImagenesComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
