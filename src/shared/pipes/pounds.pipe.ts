import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pounds'
})
export class PoundsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(!value) return null
    const pounds = ((value / 10) * 2);
    return `${pounds.toFixed(2)} lb`;
  }

}
