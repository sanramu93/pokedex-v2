import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-type-badge-icon',
  templateUrl: './type-badge-icon.component.html',
  styleUrls: ['./type-badge-icon.component.scss']
})
export class TypeBadgeIconComponent implements OnInit {

  @Input() type: string;

  public imageUrl: string;
  public bgClass: string;

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = `assets/img/types/${this.type}.svg`;
    this.bgClass = `bg-${this.type}-400`;
  }

}
