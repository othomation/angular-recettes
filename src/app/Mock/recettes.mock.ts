import { Recette } from '../Models/recette';
import { v4 as uuidv4 } from 'uuid';
export const Recettes: Array<Recette> = [
  new Recette(
    '1',
    'Pizza',
    'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
    {
      temps_preparation: 20,
      temps_vaisselle: 10,
      temps_cuisson: 40,
      difficulte: 2,
      nombre_personnes: 4,
      cout: 1,
    },
    [
      {
        obligatoire: true,
        ordre: 1,
        description: 'Il faut prendre son marteau et taper sur la farine',
      },
      {
        obligatoire: false,
        ordre: 2,
        description: 'Faites un petit bisou tout doux sur votre pizza.',
      },
      {
        obligatoire: true,
        ordre: 3,
        description:
          'Prenez vos petites main et mettez moi cette pizza au four !',
      },
    ],
    [
      {
        nom: 'farine',
        quantite: 100,
        obligatoire: true,
        unite: 'gr',
      },
      {
        nom: 'lait',
        quantite: 1,
        obligatoire: true,
        unite: 'l',
      },
    ],
    false
  ),
  new Recette(
    '3',
    'Gyoza poireaux',
    'https://www.audreycuisine.fr/wp-content/uploads/2020/05/shutterstock_1352181614-scaled.jpg',
    {
      temps_preparation: 20,
      temps_vaisselle: 10,
      temps_cuisson: 40,
      difficulte: 2,
      nombre_personnes: 4,
      cout: 1,
    },
    [
      {
        obligatoire: true,
        ordre: 1,
        description: 'Il faut prendre son marteau et taper sur les poireaux',
      },
      {
        obligatoire: false,
        ordre: 2,
        description: 'Faites un petit bisou tout doux sur votre pizzgyozaa.',
      },
      {
        obligatoire: true,
        ordre: 3,
        description:
          'Prenez vos petites main et mettez moi cette pate au four !',
      },
    ],
    [
      {
        nom: 'farine',
        quantite: 100,
        obligatoire: true,
        unite: 'gr',
      },
      {
        nom: 'talent',
        quantite: 2222,
        obligatoire: true,
        unite: 'l',
      },
    ],
    true
  ),
  new Recette(
    '4',
    'Pizza',
    'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
    {
      temps_preparation: 20,
      temps_vaisselle: 10,
      temps_cuisson: 40,
      difficulte: 2,
      nombre_personnes: 4,
      cout: 1,
    },
    [
      {
        obligatoire: true,
        ordre: 1,
        description: 'Il faut prendre son marteau et taper sur la farine',
      },
      {
        obligatoire: false,
        ordre: 2,
        description: 'Faites un petit bisou tout doux sur votre pizza.',
      },
      {
        obligatoire: true,
        ordre: 3,
        description:
          'Prenez vos petites main et mettez moi cette pizza au four !',
      },
    ],
    [
      {
        nom: 'farine',
        quantite: 100,
        obligatoire: true,
        unite: 'gr',
      },
      {
        nom: 'lait',
        quantite: 1,
        obligatoire: true,
        unite: 'l',
      },
    ],
    false
  ),
  new Recette(
    '5',
    'Pizza',
    'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
    {
      temps_preparation: 20,
      temps_vaisselle: 10,
      temps_cuisson: 40,
      difficulte: 2,
      nombre_personnes: 4,
      cout: 1,
    },
    [
      {
        obligatoire: true,
        ordre: 1,
        description: 'Il faut prendre son marteau et taper sur la farine',
      },
      {
        obligatoire: false,
        ordre: 2,
        description: 'Faites un petit bisou tout doux sur votre pizza.',
      },
      {
        obligatoire: true,
        ordre: 3,
        description:
          'Prenez vos petites main et mettez moi cette pizza au four !',
      },
    ],
    [
      {
        nom: 'farine',
        quantite: 100,
        obligatoire: true,
        unite: 'gr',
      },
      {
        nom: 'lait',
        quantite: 1,
        obligatoire: true,
        unite: 'l',
      },
    ],
    true
  ),
  new Recette(
    '7',
    'Pizza',
    'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
    {
      temps_preparation: 20,
      temps_vaisselle: 10,
      temps_cuisson: 40,
      difficulte: 2,
      nombre_personnes: 4,
      cout: 1,
    },
    [
      {
        obligatoire: true,
        ordre: 1,
        description: 'Il faut prendre son marteau et taper sur la farine',
      },
      {
        obligatoire: false,
        ordre: 2,
        description: 'Faites un petit bisou tout doux sur votre pizza.',
      },
      {
        obligatoire: true,
        ordre: 3,
        description:
          'Prenez vos petites main et mettez moi cette pizza au four !',
      },
    ],
    [
      {
        nom: 'farine',
        quantite: 100,
        obligatoire: true,
        unite: 'gr',
      },
      {
        nom: 'lait',
        quantite: 1,
        obligatoire: true,
        unite: 'l',
      },
    ],
    true
  ),
];
