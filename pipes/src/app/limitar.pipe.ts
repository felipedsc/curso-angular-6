import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitar'
})
export class LimitarPipe implements PipeTransform {
  //inicialmente sem parametro limite
  transform(value: string, limite: number = 10): any {
    if (value.length > limite) {
      return value.substr(0, limite) + " ...";
    }

    return value;
  }
}
