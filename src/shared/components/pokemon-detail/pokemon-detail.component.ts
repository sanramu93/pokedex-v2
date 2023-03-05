import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from 'src/shared/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  public id: number;
  public typeParam: string;
  public types: string[];
  public pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: PokemonDataService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.typeParam = this.route.snapshot.params['type'];
    this.getPokemonById(this.id);
  }

  public formatId(id: number) {
    return String(id).padStart(4, '0');
  }

  public getBgColorClass(types: string[]) {
    return types?.includes(this.typeParam) ? 
            `bg-${this.typeParam}-grad` : 
            `bg-${types?.[0]}-grad`;
  }

  private getPokemonById(id: number) {
    this.dataService.getPokemonById(id)
    .subscribe({
      next: pokemon => {
        this.pokemon = pokemon;
        this.types = this.pokemon.types.map((type:any) => type.type.name);
      },
      error: err => console.log(err)
    })
  }



}