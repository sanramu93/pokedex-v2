import { Component, OnInit, Input } from '@angular/core';
import { StatusName } from './enums/status-name';
import { MAX_STAT_VALUE } from './constants/max-stats';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  @Input() status: any;

  constructor() { }

  ngOnInit(): void {
  }

  public getStatusName(status: any) {
    const statusEnumName = status.stat.name as keyof typeof StatusName;
    return StatusName[statusEnumName];
  }

  public getStatusPercentage(status: any) {
    const percentage = status['base_stat'] / MAX_STAT_VALUE * 100;
    return  percentage.toFixed(2) + '%';
  }

  public getStatusBgClass(status: any) {
    const statusEnumName = status.stat.name as keyof typeof StatusName;
    const statusName = StatusName[statusEnumName].toLowerCase();
    return `bg-${statusName}`;
  }

}
