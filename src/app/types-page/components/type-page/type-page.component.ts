import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable,delay,forkJoin, map, mergeMap } from 'rxjs';
import { Type } from 'src/shared/enums/type-enum';
import { PokemonApiService } from 'src/shared/services/pokemon-api.service';

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
    private apiService: PokemonApiService,
  ) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.getAllPokemonByType(this.type);
  }

  public getPokemonSprite(pokemon: any) {
    const sprite = pokemon.sprites.front_default;
    const fallbackSprite = pokemon.sprites.other['official-artwork'].front_default;
    if(!sprite) return fallbackSprite;
    return sprite;
  }

  private getAllPokemonByType(type: string) {
    const typeEnumName = type.toUpperCase() as keyof typeof Type;

    this.apiService.getAllPokemonByType(Type[typeEnumName])
    .pipe(
      delay(1000),
      map((pokemon:any) => pokemon.map((p:any) => p.pokemon.url)),
      mergeMap( urls => forkJoin(this.getPokemonsByUrl(urls)))
    )
    .subscribe({
      next: pokemon => {
        this.pokemonByType = pokemon.sort((a,b) => a.id - b.id);
        this.isLoading = false;
      }, 
      error: err => console.log(err)
    })
  }

  private getPokemonsByUrl(urls: string[]): Observable<any>[] {
    return urls.map(url => this.apiService.getPokemonByUrl(url))
  }



}
