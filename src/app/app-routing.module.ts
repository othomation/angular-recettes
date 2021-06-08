import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './Pages/page-accueil/page-accueil.component';
import { CardRecetteComponent } from './Pages/page-recette/components/card-recette/card-recette.component';
import { PageRecetteComponent } from './Pages/page-recette/page-recette.component';
import { PageRecettesComponent } from './Pages/page-recettes/page-recettes.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageAccueilComponent,
  },
  {
    path: 'recettes/:id',
    component: PageRecetteComponent,
  },
  { path: 'recettes', component: PageRecettesComponent },
  { path: 'recette_test', component: CardRecetteComponent },
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
