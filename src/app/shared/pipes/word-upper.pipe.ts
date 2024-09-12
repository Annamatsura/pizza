import { Pipe, PipeTransform } from '@angular/core';
import {match} from "assert";

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, wordPart: string): string {
    return value.replace(new RegExp('[А-Яа-я]*' + wordPart + '[а-я]*', 'g'), (match: string) => {
      return match.toUpperCase();
    });
  }

}
