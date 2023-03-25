import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailMovesComponent } from './pokemon-detail-moves.component';

describe('PokemonDetailMovesComponent', () => {
  let component: PokemonDetailMovesComponent;
  let fixture: ComponentFixture<PokemonDetailMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailMovesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
