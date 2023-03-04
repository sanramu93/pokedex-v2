import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() public name: string;
  @Input() public id: number;
  @Input() public imgUrl: string;
  @Input() public type: string;
  @Input() public numColor: string;

  constructor() { }

  ngOnInit(): void {
    this.numColor = `bg-${this.type}-400`;
  }

}