import { Component, OnInit } from '@angular/core';
import { RandomizerService } from '../shared/randomizer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facts-table',
  templateUrl: './facts-table.component.html',
  styleUrls: ['./facts-table.component.scss'],
})
export class FactsTableComponent implements OnInit {
  constructor(public randomizerService: RandomizerService) {}

  headers: string[] = ['numbers', 'date', 'math'];

  numbersForm!: FormGroup;
  dateForm!: FormGroup;
  mathForm!: FormGroup;

  numberValue: string = '';
  dateValue: string = '';
  mathValue: string = '';

  numbersArray: number[] = [];
  dateArray: number[] = [];
  mathArray: number[] = [];

  num?: number;

  ngOnInit() {
    this.numbersForm = new FormGroup({
      numberValue: new FormControl('', Validators.required),
    });
    this.numbersArray = this.randomizerService.generateArray('number');
    this.dateForm = new FormGroup({
      dateValue: new FormControl('', Validators.required),
    });
    this.dateArray = this.randomizerService.generateArray('date');
    this.mathForm = new FormGroup({
      mathValue: new FormControl('', Validators.required),
    });
    this.mathArray = this.randomizerService.generateArray('math');
  }

  getFact(type: string, number: number | string) {
    this.num = 0;
    this.num = +number;
    this.randomizerService.generateMessage(type, this.num);
  }
}
