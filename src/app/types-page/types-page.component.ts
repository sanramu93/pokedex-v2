import { Component, OnInit } from '@angular/core';
import { TYPE_TAGS } from './constants/type-tags';

@Component({
  selector: 'app-types-page',
  templateUrl: './types-page.component.html',
  styleUrls: ['./types-page.component.scss']
})
export class TypesPageComponent implements OnInit {

  public typeTags = [...TYPE_TAGS];

  constructor() { }

  ngOnInit(): void {
  }

}
