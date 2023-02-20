import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://pokeapi.co/api/v2';


@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPokemonByType(typeId: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/type/${typeId}`);
  }
}
