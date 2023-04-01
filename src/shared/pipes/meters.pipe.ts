import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meters'
})
export class MetersPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(!value) return null;
    const meters = value / 10;
    return `${meters.toFixed(2)} m`;
  }

}
