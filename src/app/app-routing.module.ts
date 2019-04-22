import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversorComponent } from './components/conversor/conversor.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { BannernoticiasComponent } from './components/bannernoticias/bannernoticias.component';
import { BannersitiosComponent } from './components/bannersitios/bannersitios.component';


const routes: Routes = [
  {path:'conversor',component:ConversorComponent},
  {path:'imagenes',component:ImagenesComponent},
  {path:'bannernoticias',component:BannernoticiasComponent},
  {path:'bannersitios',component:BannersitiosComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
