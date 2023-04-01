import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foots'
})
export class FootsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(!value) return null
    const foots = (value / 10) * 3.281;
    return `${foots.toFixed(2)} ft`;
  }

}
