import Indicateurs from './indicateurs';
import Etape from './etape';
import Ingredient from './ingredient';
export class Recette {
  public difficulteMax = 5;
  constructor(
    private id: string,
    private nom: string,
    private imageUrl: string,
    private indicateurs: Indicateurs,
    private etapes: Array<Etape>,
    private ingredients: Ingredient[],
    private favoris: boolean
  ) {}

  getId = () => this.id;
  getNom = () => this.nom;
  getImageUrl = () => this.imageUrl;
  getIngredients = () => this.ingredients;
  getEtapes = () => this.etapes;
  getIndicateurs = () => this.indicateurs;
  getFavoris = () => this.favoris;

  setId = (id: string) => (this.id = id);
  setNom = (nom: string) => (this.nom = nom);
  setImageUrl = (imageUrl: string) => (this.imageUrl = imageUrl);
  setIngredients = (ingredients: Ingredient[]) =>
    (this.ingredients = ingredients);
  addIngredients = (ingredient: Ingredient) =>
    this.ingredients.push(ingredient);
  setEtapes = (etapes: Etape[]) => (this.etapes = etapes);
  addEtape = (etape: Etape) => this.etapes.push(etape);
  setIndicateurs = (indicateurs: Indicateurs) =>
    (this.indicateurs = indicateurs);
  setFavoris = (favoris: boolean) => (this.favoris = favoris);

  toggleFavoris = () => (this.favoris = !this.favoris);
}
