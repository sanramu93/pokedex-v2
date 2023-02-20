import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Type } from 'src/shared/enums/type-enum';
import { PokemonApiService } from 'src/shared/services/pokemon-api.service';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['./type-page.component.scss']
})
export class TypePageComponent implements OnInit {

  public typeName: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: PokemonApiService
  ) { }

  ngOnInit(): void {
    this.typeName = this.route.snapshot.params['id'];

    this.dataService.getAllPokemonByType(Type.normal)
    .subscribe(res => console.log(res));
  }



}
