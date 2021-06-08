interface IEtape {
  nom: string;
  description: string;
}
interface IIngredient {
  nom: string;
}
export class Recette {
  public difficulteMax = 5;
  constructor(
    private nom: string,
    private id: string,
    private imageUrl: string,
    private etapes: Array<IEtape>,
    private ingredients: Array<IIngredient>,
    private difficulte: 1 | 2 | 3 | 4 | 5
  ) {}

  getNom = () => this.nom;
  getId = () => this.id;
  getEtapes = () => this.etapes;
  getIngredients = () => this.ingredients;
  getDifficulte = () => this.difficulte;
  getImageUrl = () => this.imageUrl;
}
