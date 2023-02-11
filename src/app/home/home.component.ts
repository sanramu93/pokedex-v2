import { Component, OnInit } from '@angular/core';
import { SECTION_LINKS } from './constants/section-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sectionLinks = [...SECTION_LINKS];

  constructor() { }

  ngOnInit(): void {
  }

}
