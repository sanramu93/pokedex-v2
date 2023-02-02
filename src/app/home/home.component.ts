import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menuItems = ['Types', 'Locations', ' Move and Abilities', 'Favorites'];

  constructor() { }

  ngOnInit(): void {
  }

}
