import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'players',
  standalone: true
})
export class PlayersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
