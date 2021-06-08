import { Component, Input, OnInit } from '@angular/core';
import { Recette } from 'src/app/Models/recette';

@Component({
  selector: 'app-card-recette',
  templateUrl: './card-recette.component.html',
  styleUrls: ['./card-recette.component.scss'],
})
export class CardRecetteComponent implements OnInit {
  constructor() {}
  @Input()
  public recette!: Recette;
  @Input()
  public isComplete: boolean = true;

  ngOnInit(): void {
    console.log('Recette :', this.recette);
  }
}
