import { Injectable } from '@angular/core';
import { Recette } from '../Models/recette';
import { Recettes } from '../Mock/recettes.mock';
@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  constructor() {}

  async getRecettes(): Promise<Array<Recette> | null> {
    let data;
    try {
      const response = await Recettes;
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
        (await Recettes.find((recette) => recette.getId() === id)) || null;
      data = await response;
    } catch (error) {
      console.error('[ RecetteService.getRecette() ]', error);
      data = null;
    }
    return data;
  }

  toggleFavoris(recette: Recette) {
    recette.toggleFavoris();
    return recette.getFavoris();
  }
}
