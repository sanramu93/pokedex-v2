import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilograms'
})
export class KilogramsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(!value) return null
    const kilograms = (value / 10);
    return `${kilograms.toFixed(2)} kg`;
  }

}
