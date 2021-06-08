import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './Pages/page-accueil/page-accueil.component';
import { PageRecetteComponent } from './Pages/page-recette/page-recette.component';
import { PageRecettesComponent } from './Pages/page-recettes/page-recettes.component';
import { MenuComponent } from './Components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    PageRecetteComponent,
    PageRecettesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
