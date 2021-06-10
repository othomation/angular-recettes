import { Component, OnInit } from '@angular/core';
import { Recette } from 'src/app/Models/recette';
import { RecetteService } from 'src/app/Services/recette.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss'],
})
export class PageAccueilComponent implements OnInit {
  constructor(private recetteService: RecetteService) {}

  public recettes: Array<Recette> | null = [];


  async ngOnInit(): Promise<void> {
    this.recettes = await this.recetteService.getRecettesFavoris();
    console.log(this.recettes);
  }
}
