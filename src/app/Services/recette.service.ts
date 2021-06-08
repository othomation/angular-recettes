import { Injectable } from '@angular/core';
import { Recette } from '../Models/recette';
import { Recettes } from '../Mock/recettes.mock';
@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  constructor() {}

  async getRecettes(): Promise<Array<Recette>> {
    return Promise.resolve(Recettes);
  }

  getRecette(id: Recette['id']): Recette | null {
    const recette = Recettes.find((recette) => recette.getId() === id);
    return recette || null;
  }
}
