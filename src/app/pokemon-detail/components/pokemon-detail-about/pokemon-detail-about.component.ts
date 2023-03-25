import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonDataService } from 'src/shared/services/pokemon-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail-about',
  templateUrl: './pokemon-detail-about.component.html',
  styleUrls: ['./pokemon-detail-about.component.scss']
})
export class PokemonDetailAboutComponent implements OnInit, OnDestroy {

  public pokemonDetailSubs: Subscription;
  public pokemonDescriptionSubs: Subscription;

  public pokemon: any;
  public pokemonDescription: any;
  public pokemonFlavorText: string;

  constructor(
    private dataService: PokemonDataService
  ) { }

  ngOnInit(): void {
    this.getPokemonDetail();
    this.getPokemonDescription();
  }

  public getPokemonDetail() {
    this.pokemonDetailSubs =
      this.dataService.pokemonDetail$
      .subscribe(
        res => {
          this.pokemon = res;
          console.log(this.pokemon);
        }
      );
  }

  public getPokemonDescription() {
    this.pokemonDescriptionSubs =
      this.dataService.pokemonDescription$
      .subscribe(
        (res: any) => {
          this.pokemonDescription = res;
          // const descriptionText =
          //    res.flavor_text_entries[0].flavor_text.replace(/\n/g, ' ');
          // this.pokemonDescription = this.cleanDescription(descriptionText);
          console.log(this.pokemonDescription);
        });
  }

  public cleanFlavorText(description: string) {
    return description
          .replace('\n',' ')
          .replace('\f','\n')
  }

  ngOnDestroy(): void {
    this.pokemonDetailSubs.unsubscribe();
    this.pokemonDescriptionSubs.unsubscribe();
  }

}
