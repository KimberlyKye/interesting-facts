import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Fact } from '../model/fact';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  static url = 'http://numbersapi.com';
  response: any;

  constructor(private http: HttpClient) {}

  returnResponse(type: string, value: string): Observable<Fact> {
    return this.http
      .get<Fact>(`${MessageService.url}/${value}/${type}?json`)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => {
          alert('Failed to find a fact');
          return throwError(err);
        })
      );
  }

  generateMessage(type: string, value: string) {
    this.returnResponse(type, value).subscribe((fact) => {
      alert(fact.text);
    });
  }
}
