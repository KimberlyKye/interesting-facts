import { Component, OnInit } from '@angular/core';
import { Fact, RandomizerService } from '../shared/randomizer.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-facts-table',
  templateUrl: './facts-table.component.html',
  styleUrls: ['./facts-table.component.scss'],
})
export class FactsTableComponent implements OnInit {
  constructor(public randomizerService: RandomizerService) {}
  mathArray: Fact[] = [];
  dateArray: Fact[] = [];
  numbersArray: Fact[] = [];

  fact: Fact = { text: '', number: null, found: false, type: '' };

  ngOnInit() {
    this.loadPage();
  }

  private loadPage() {
    this.numbersArray = this.generateNumbersArray();
    this.dateArray = this.generateDateArray();
    this.mathArray = this.generateMathArray();
    console.log(this.mathArray);
  }

  generateNumbersArray(): Fact[] {
    for (var i = 0; i < 5; i++) {
      this.randomizerService
        .returnResponse('trivia')
        .pipe(take(1))
        .subscribe((fact) => this.numbersArray.push(fact));
    }
    return this.numbersArray;
  }

  generateDateArray(): Fact[] {
    for (var i = 0; i < 5; i++) {
      this.randomizerService
        .returnResponse('date')
        .pipe(take(1))
        .subscribe((fact) => this.dateArray.push(fact));
    }
    return this.dateArray;
  }

  generateMathArray(): Fact[] {
    for (var i = 0; i < 5; i++) {
      this.randomizerService
        .returnResponse('math')
        .pipe(take(1))
        .subscribe((fact) => this.mathArray.push(fact));
    }
    return this.mathArray;
  }
  headers: string[] = ['numbers', 'date', 'math'];
}
