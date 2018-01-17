import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringlength'
})
export class StringlengthPipe implements PipeTransform {

  /**
   * returns the input string, if the input is longer then the limit add '...' after the input
   * @param value define the input string {{string | stringlength: limit (number)}}
   * @param limit define how long the string should before the cut {{ string | stringlength: limit (number) }} ex {{data| stringlength: 50}}
   */
  transform(value: string, limit: number): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
