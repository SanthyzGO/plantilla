import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import{FormsModule} from '@angular/forms';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { BannernoticiasComponent } from './components/bannernoticias/bannernoticias.component';
import { BannersitiosComponent } from './components/bannersitios/bannersitios.component';

 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConversorComponent,
    ImagenesComponent,
    CarruselComponent,
    NoticiasComponent,
    BannernoticiasComponent,
    BannersitiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
