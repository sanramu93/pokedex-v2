import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailAboutComponent } from './pokemon-detail-about.component';

describe('PokemonDetailAboutComponent', () => {
  let component: PokemonDetailAboutComponent;
  let fixture: ComponentFixture<PokemonDetailAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
