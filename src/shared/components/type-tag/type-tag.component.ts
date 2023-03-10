import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.scss']
})
export class TypeTagComponent implements OnInit {

  @Input() public color: string;
  @Input() public text: string;
  @Input() public iconPath: string;

  public bgColorClass: string;

  constructor() { }

  ngOnInit(): void {
    this.bgColorClass = `bg-${this.color}-400`
  }

}
