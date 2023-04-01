import { Injectable } from '@angular/core';
import { Observable, delay, forkJoin, map, mergeMap, BehaviorSubject } from 'rxjs';
import { PokemonApiService } from './pokemon-api.service';
import { Type } from './../enums/type-enum';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  public pokemonByType: any;
  public pokemonByType$ = new BehaviorSubject(null);

  public pokemonDetail: any;
  public pokemonDetail$ = new BehaviorSubject(null);

  public pokemonDescription: any;
  public pokemonDescription$ = new BehaviorSubject(null);

  constructor(
    private apiService: PokemonApiService
  ) { }

  public getPokemonSprite(pokemon: any): string {
    const sprite = pokemon.sprites.front_default;
    const fallbackSprite = pokemon.sprites.other['official-artwork'].front_default;
    if(!sprite) return fallbackSprite;
    return sprite;
  }

  public getPokemonById(id: number): Observable<any> {
    return this.apiService.getPokemonById(id);
  }

  public getPokemonDescriptionById(id: number): Observable<any> {
    return this.apiService.getPokemonDescriptionById(id);
  }

  public getAllPokemonByType(type: string): Observable<any[]> {
    const typeEnumName = type.toUpperCase() as keyof typeof Type;

    return this.apiService.getAllPokemonByType(Type[typeEnumName])
    .pipe(
      delay(1000),
      map((pokemon:any) => pokemon.map((p:any) => p.pokemon.url)),
      mergeMap( urls => forkJoin(this.getAllPokemonByUrl(urls))),
      map(pokemon => pokemon.sort((a,b) => a.id - b.id))
    );
  }

  public getTypeInfo(typeId: number): Observable<any> {
    return this.apiService.getTypeInfo(typeId);
  }

  public getAllPokemonByUrl(urls: string[]): Observable<any>[] {
    return urls.map(url => this.apiService.getPokemonByUrl(url))
  }

  public savePokemonByType(pokemon: any) {
    this.pokemonByType = pokemon;
    this.pokemonByType$.next(this.pokemonByType);
  }

  public savePokemonDetail(pokemon: any) {
    this.pokemonDetail = pokemon;
    this.pokemonDetail$.next(this.pokemonDetail);
  }

  public savePokemonDescription(pokemon: any) {
    this.pokemonDescription = pokemon;
    this.pokemonDescription$.next(this.pokemonDescription);
  }
}
