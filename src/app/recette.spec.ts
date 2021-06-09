import { Recette } from './Models/recette';

describe('Recette', () => {
  it('should create an instance', () => {
    expect(new Recette('hello','2','yes',[],[],1)).toBeTruthy();
  });
});
