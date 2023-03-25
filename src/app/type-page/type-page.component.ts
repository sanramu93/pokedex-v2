import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from 'src/shared/services/pokemon-data.service';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['./type-page.component.scss']
})
export class TypePageComponent implements OnInit {

  public isLoading = true;
  public type: string;
  public pokemonByType: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: PokemonDataService
  ) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.getAllPokemonByType(this.type);
  }

  public getPokemonSprite(pokemon: any): string {
    return this.dataService.getPokemonSprite(pokemon);
  }

  private getAllPokemonByType(type: string) {
    this.dataService.getAllPokemonByType(type)
    .subscribe({
      next: pokemon => {
        this.pokemonByType = pokemon;
        this.isLoading = false;
      } ,
      error: err => console.log(err)
    });
  }

}
