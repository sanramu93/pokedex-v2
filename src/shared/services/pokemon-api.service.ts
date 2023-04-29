import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TypesRes } from '../models/types';

const BASE_URL = 'https://pokeapi.co/api/v2';


@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPokemonByType(typeId: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/type/${typeId}`)
      .pipe(map(res => res.pokemon));
  }

  public getPokemonByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public getPokemonById(id: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/pokemon/${id}`);
  }

  public getPokemonDescriptionById(id: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/pokemon-species/${id}`);
  }

  public getAllTypes(): Observable<TypesRes> {
    return this.http.get<any>(`${BASE_URL}/type`);
  }

  public getTypeInfo(typeId: number): Observable<any> {
    return this.http.get<any>(`${BASE_URL}/type/${typeId}`);
  }

}
