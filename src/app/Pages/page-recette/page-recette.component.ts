import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from 'src/app/Models/recette';
import { RecetteService } from '../../Services/recette.service';

@Component({
  selector: 'app-page-recette',
  templateUrl: './page-recette.component.html',
  styleUrls: ['./page-recette.component.scss'],
})
export class PageRecetteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private recetteService: RecetteService
  ) {}

  public recette!: Recette | null;

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params.id;
    this.recette = await this.recetteService.getRecette(id);
  }
}
