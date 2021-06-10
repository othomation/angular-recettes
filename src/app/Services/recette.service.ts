import { Injectable } from '@angular/core';
import { Recette } from '../Models/recette';
import { Recettes } from '../Mock/recettes.mock';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  private recettes: Recette[];

  constructor(private route: Router) {
    this.recettes = Recettes;
  }

  async getRecettes(): Promise<Array<Recette> | null> {
    let data;
    try {
      const response = await this.recettes;
      data = await response;
    } catch (error) {
      console.error('[ RecetteService.getRecettes() ]', error);
      data = null;
    }
    return data;
  }

  async getRecette(id: Recette['id']): Promise<Recette | null> {
    let data;
    try {
      const response =
        (await this.recettes.find((recette) => recette.getId() === id)) || null;
      data = await response;
    } catch (error) {
      console.error('[ RecetteService.getRecette() ]', error);
      data = null;
    }
    return data;
  }

  async getRecettesFavoris(): Promise<Recette[] | null> {
    let data;
    try {
      const response = await this.recettes.filter(
        (recette) => recette.getFavoris() === true
      );
      data = await response;
    } catch (error) {
      console.error('[ RecetteService.getRecettesFavoris() ]', error);
      data = null;
    }
    return data;
  }

  toggleFavoris(recette: Recette) {
    recette.toggleFavoris();
    if (recette.getFavoris())
      this.route.navigate(['recettes/' + recette.getId()]);
  }
}
