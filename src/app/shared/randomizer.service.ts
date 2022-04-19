import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  static url = 'http://numbersapi.com/random';
  response: any;
  mathArray: Fact[] = [];
  fact: Fact = { text: '', number: null, found: false, type: '' };

  constructor(private http: HttpClient) {}

  returnResponse(type: string): Observable<Fact> {
    return this.http.get<Fact>(`${RandomizerService.url}/${type}?json`).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
