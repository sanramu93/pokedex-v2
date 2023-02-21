import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Type } from 'src/shared/enums/type-enum';
import { PokemonApiService } from 'src/shared/services/pokemon-api.service';
import { PokemonDataService } from 'src/shared/services/pokemon-data.service';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['./type-page.component.scss']
})
export class TypePageComponent implements OnInit {

  public typeName: string;

  public pokemonByType: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: PokemonApiService,
    private dataService: PokemonDataService
  ) { }

  ngOnInit(): void {
    this.typeName = this.route.snapshot.params['id'];
    this.getAllPokemonByType(this.typeName);
  }

  private getAllPokemonByType(typeName: string) {
    const typeEnumName = typeName.toUpperCase() as keyof typeof Type;

    this.apiService.getAllPokemonByType(Type[typeEnumName])
    .subscribe({
      next: res => {
        res.map(
          (pokemon:any) => 
            this.getPokemonByUrl(pokemon.pokemon.url)
        );
      },
      error: err => console.log(err)
    })
  }

  private getPokemonByUrl(url: string) {
    this.apiService.getPokemonByUrl(url)
    .subscribe({
      next: (newPokemon: any) => {
        this.pokemonByType = [...this.pokemonByType, newPokemon];
        console.log(this.pokemonByType.length)
      },
      error: err => console.log(err)
    })
  }



}
