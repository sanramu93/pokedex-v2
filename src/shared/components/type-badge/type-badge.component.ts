import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.scss']
})
export class TypeBadgeComponent implements OnInit {

  @Input() public type: string;
  public bgColorClass: string;

  constructor() { }

  ngOnInit(): void {
    this.bgColorClass = `bg-${this.type}-400`;
  }

}
