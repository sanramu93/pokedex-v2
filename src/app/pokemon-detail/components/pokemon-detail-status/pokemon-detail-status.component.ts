import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonDataService } from 'src/shared/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-detail-status',
  templateUrl: './pokemon-detail-status.component.html',
  styleUrls: ['./pokemon-detail-status.component.scss']
})
export class PokemonDetailStatusComponent implements OnInit, OnDestroy {

  public pokemonDetailSubs: Subscription;
  public status: [];


  constructor(
    private dataService: PokemonDataService
  ) { }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  private getPokemonDetails() {
    this.pokemonDetailSubs =
      this.dataService.pokemonDetail$
      .subscribe({
        next: (res: any) => this.status = res.stats
      })
  }

  ngOnDestroy(): void {
      this.pokemonDetailSubs.unsubscribe();
  }

}
