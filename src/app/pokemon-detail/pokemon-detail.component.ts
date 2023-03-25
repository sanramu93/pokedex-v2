import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { PokemonDataService } from 'src/shared/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {


  public isLoading = true;
  public id: number;
  public typeParam: string;
  public types: string[];
  public pokemon: any;
  public imgUrl: string;
  public pokemonTabs = ['about', 'status', 'moves'];
  public selectedTab = this.pokemonTabs[0];

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
    if(!id) return '';
    return `# ${String(id).padStart(4, '0')}`;
  }

  public getBgColorClass(types: string[]) {
    return types?.includes(this.typeParam) ? 
            `bg-${this.typeParam}-grad` : 
            `bg-${types?.[0]}-grad`;
  }
  public getTabColorClass(tab: string) {
    if(tab !== this.selectedTab) return null;
    return this.getBgColorClass(this.types);
  }

  public onTabChange(e: any) {
    this.selectedTab = e.target.value;

  }

  private getPokemonById(id: number) {
    this.dataService.getPokemonById(id)
    .pipe(delay(500))
    .subscribe({
      next: pokemon => {
        this.pokemon = pokemon;
        this.types = this.pokemon.types.map((type:any) => type.type.name);
        this.imgUrl = this.dataService.getPokemonSprite(this.pokemon);
        this.isLoading = false;
      },
      error: err => console.log(err)
    })
  }



}