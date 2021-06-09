type Graduation = 0 | 1 | 2 | 3 | 4 | 5;
export default interface Indicateurs {
  temps_preparation: number;
  temps_vaisselle: number;
  temps_cuisson: number;
  difficulte: Graduation;
  nombre_personnes: number;
  cout: Graduation;
}
