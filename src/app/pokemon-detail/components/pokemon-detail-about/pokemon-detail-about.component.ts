import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PokemonDataService } from 'src/shared/services/pokemon-data.service';
import { Subscription } from 'rxjs';
import { DamageRelations } from 'src/shared/models/damage-relations';

@Component({
  selector: 'app-pokemon-detail-about',
  templateUrl: './pokemon-detail-about.component.html',
  styleUrls: ['./pokemon-detail-about.component.scss']
})
export class PokemonDetailAboutComponent implements OnInit, OnDestroy {

  @Input() types: string[];

  public pokemon: any;
  public pokemonDescription: any;
  public pokemonFlavorText: string;
  public damageRelations: any;

  private pokemonDetailSubs: Subscription;
  private pokemonDescriptionSubs: Subscription;
  private damageRelationsSubs: Subscription;

  constructor(
    private dataService: PokemonDataService
  ) { }

  ngOnInit(): void {
    this.getPokemonDetail();
    this.getPokemonDescription();
    this.getDamageRelations();
  }

  public getPokemonDetail() {
    this.pokemonDetailSubs = this.dataService.pokemonDetail$
      .subscribe(res => this.pokemon = res);
  }

  public getPokemonDescription() {
    this.pokemonDescriptionSubs =
      this.dataService.pokemonDescription$
      .subscribe(
        (res: any) => {
          this.pokemonDescription = res;
          const englishFlavortTexts = this.getFlavorTextsByLanguage(res?.flavor_text_entries);
          this.pokemonFlavorText = englishFlavortTexts?.[0].flavor_text;
          this.pokemonFlavorText = this.cleanFlavorText(this.pokemonFlavorText);
        });
  }

  private getFlavorTextsByLanguage(flavorTextEntries: any, lang = 'en') {
    return flavorTextEntries?.filter((entry: any) => entry.language.name === lang)
  }

  private getDamageRelations() {
    this.damageRelationsSubs =
      this.dataService.damageRelations$.subscribe(res => this.damageRelations = res);
  }
  
  private cleanFlavorText(description: string) {
    return description
          ?.replace('\n',' ')
          ?.replace('\f','\n')
  }

  ngOnDestroy(): void {
    this.pokemonDetailSubs.unsubscribe();
    this.pokemonDescriptionSubs.unsubscribe();
    this.damageRelationsSubs.unsubscribe();
  }

}
