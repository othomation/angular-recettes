import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecetteComponent } from './card-recette.component';

describe('CardRecetteComponent', () => {
  let component: CardRecetteComponent;
  let fixture: ComponentFixture<CardRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRecetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
