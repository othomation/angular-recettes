import { Component, OnInit } from '@angular/core';
import { Recette } from 'src/app/Models/recette';
import { RecetteService } from '../../Services/recette.service';
@Component({
  selector: 'app-page-recettes',
  templateUrl: './page-recettes.component.html',
  styleUrls: ['./page-recettes.component.scss'],
})
export class PageRecettesComponent implements OnInit {
  constructor(private recetteService: RecetteService) {}
  public recettes: Array<Recette> = [];
  async ngOnInit(): Promise<void> {
    this.recettes = await this.recetteService.getRecettes();
    console.log(this.recettes);
  }
}
