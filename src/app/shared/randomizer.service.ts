import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { angularMath } from 'angular-ts-math';

export interface Fact {
  text: string;
  number: number | null;
  found: boolean;
  type: string;
  date?: string;
  year?: string;
}

@Injectable({
  providedIn: 'root',
})
export class RandomizerService {
  static url = 'http://numbersapi.com';
  response: any;

  constructor(private http: HttpClient) {}

  returnResponse(type: string, value: number): Observable<Fact> {
    return this.http
      .get<Fact>(`${RandomizerService.url}/${value}/${type}?json`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  generateMessage(type: string, value: number) {
    let newFact!: Fact;
    this.returnResponse(type, value).subscribe((fact) => {
      newFact = fact;
      alert(newFact.text);
    });
  }

  generateArray(type: string): number[] {
    let array: number[] = [];
    if (type == 'date') {
      for (var i = 0; i < 5; i++) {
        array.push(angularMath.getIntegerRandomRange(0, 2022));
      }
    } else {
      for (var i = 0; i < 5; i++) {
        array.push(angularMath.getIntegerRandomRange(-10000, 10000));
      }
    }
    return array;
  }
}
