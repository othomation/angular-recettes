import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './Pages/page-accueil/page-accueil.component';
import { PageRecetteComponent } from './Pages/page-recette/page-recette.component';
import { PageRecettesComponent } from './Pages/page-recettes/page-recettes.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageAccueilComponent,
  },
  {
    path: 'recette/:id',
    component: PageRecetteComponent,
  },
  { path: 'recettes', component: PageRecettesComponent },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
