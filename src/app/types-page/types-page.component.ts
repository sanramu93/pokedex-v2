import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/shared/services/pokemon-data.service';
import { Types } from 'src/shared/models/types';
import { TypeTags } from 'src/shared/models/types';

@Component({
  selector: 'app-types-page',
  templateUrl: './types-page.component.html',
  styleUrls: ['./types-page.component.scss']
})
export class TypesPageComponent implements OnInit {

  public typeTags: TypeTags[] = [];

  constructor(
    private dataService: PokemonDataService
  ) { }

  ngOnInit(): void {
    this.getAllTypeTags();
  }

  private getAllTypeTags() {
    this.dataService.getAllTypes().subscribe(
      types => types.map(
        (t: Types) => { 
          this.typeTags.push(this.createTypeTag(t.name))
      })
    );
  }

  private createTypeTag(name: string) {
   return {
      text: name,
      color: name,
      iconPath: `assets/img/types/${name}.svg`
    }
  }

}
