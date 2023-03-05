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
  public pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: PokemonDataService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPokemonById(this.id);
  }

  private getPokemonById(id: number) {
    this.dataService.getPokemonById(id)
    .subscribe({
      next: pokemon => this.pokemon = pokemon,
      error: err => console.log(err)
    })
  }

}