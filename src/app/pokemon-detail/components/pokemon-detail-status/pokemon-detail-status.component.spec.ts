import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailStatusComponent } from './pokemon-detail-status.component';

describe('PokemonDetailStatusComponent', () => {
  let component: PokemonDetailStatusComponent;
  let fixture: ComponentFixture<PokemonDetailStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
