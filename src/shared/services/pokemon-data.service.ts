import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  pokemonByType$ = new Subject<any>();

  constructor() { }
}
