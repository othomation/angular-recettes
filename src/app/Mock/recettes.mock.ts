import { Recette } from '../Models/recette';
import { v4 as uuidv4 } from 'uuid';
export const Recettes: Array<Recette> = [
  new Recette(
    'Pizza',
    '1',
    'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
    [
      {
        nom: 'Petrir la pâte',
        description: 'Il faut prendre son marteau et taper sur la farine',
      },
      {
        nom: "Donner de l'amour",
        description: 'Faites un petit bisou tout doux sur votre pizza.',
      },
      {
        nom: 'Enfourner',
        description:
          'Prenez vos petites main et mettez moi cette pizza au four !',
      },
    ],
    [{ nom: 'farine' }, { nom: 'sauce tomate' }, { nom: 'fromage plastique' }],
    1
  ),
  new Recette(
    'Sushi',
    '2',
    'https://static.lexpress.fr/medias_12020/w_2048,h_1146,c_crop,x_0,y_154/w_480,h_270,c_fill,g_north/v1550742170/sushi-saumon-maki-saumon-japonais_6154396.jpg',
    [
      {
        nom: 'Acheter du talent',
        description:
          "Il faut aller au japon et apprendre à couper du poisson comme il faut. C'est tout.",
      },
    ],
    [{ nom: 'riz' }, { nom: 'vinaigre' }, { nom: 'saumon' }, { nom: 'talent' }],
    3
  ),
  new Recette(
    'Gyoza poireaux',
    '3',
    'https://www.audreycuisine.fr/wp-content/uploads/2020/05/shutterstock_1352181614-scaled.jpg',
    [
      {
        nom: 'Petrir la pâte',
        description: 'Faut masser masser masser la pate !',
      },
      {
        nom: 'Router bouler',
        description: 'Attention, ne roule que la pierre qui mousse.',
      },
      {
        nom: 'Frire',
        description: 'Vous brûlez pas...',
      },
    ],
    [
      { nom: 'pate farineuse' },
      { nom: 'poireaux' },
      { nom: 'bonne huile du bled' },
    ],
    5
  ),
];
