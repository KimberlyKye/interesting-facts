import { Injectable } from '@angular/core';
import { angularMath } from 'angular-ts-math';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RandomizerService {
  constructor(public datepipe: DatePipe) {}

  randomDate(start: Date, end: Date): Date {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  generateArray(type: string): string[] {
    let array: string[] = [];

    if (type == 'date') {
      for (var i = 0; i < 5; i++) {
        var d = this.datepipe.transform(
          this.randomDate(new Date(2021, 0, 1), new Date()),
          'MM/dd'
        )!;
        array.push(d);
      }
    } else {
      for (var i = 0; i < 5; i++) {
        array.push(
          angularMath.getIntegerRandomRange(-1000000, 1000000).toString()
        );
      }
    }
    return array;
  }
}
