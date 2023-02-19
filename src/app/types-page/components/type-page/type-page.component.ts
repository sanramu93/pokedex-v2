import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['./type-page.component.scss']
})
export class TypePageComponent implements OnInit {

  public typeName: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.typeName = this.route.snapshot.params['id'];
  }

}
