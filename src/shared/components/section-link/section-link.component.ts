import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-link',
  templateUrl: './section-link.component.html',
  styleUrls: ['./section-link.component.scss']
})
export class SectionLinkComponent implements OnInit {

  @Input() color: string;
  @Input() text: string;
  @Input() icon: string;

  


  constructor() { }

  ngOnInit(): void {
  }

}
