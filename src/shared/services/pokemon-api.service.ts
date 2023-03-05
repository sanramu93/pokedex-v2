import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const BASE_URL = 'https://pokeapi.co/api/v2';


@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPokemonByType(typeId: number) {
    return this.http.get<any>(`${BASE_URL}/type/${typeId}`)
      .pipe(map(res => res.pokemon));
  }

  public getPokemonByUrl(url: string) {
    return this.http.get<any>(url);
  }

  public getPokemonById(id: number) {
    return this.http.get<any>(`${BASE_URL}/pokemon/${id}`);
  }
}
