import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';
import { RandomizerService } from '../shared/randomizer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facts-table',
  templateUrl: './facts-table.component.html',
  styleUrls: ['./facts-table.component.scss'],
})
export class FactsTableComponent implements OnInit {
  constructor(
    public randomizerService: RandomizerService,
    public messageService: MessageService
  ) {}

  headers: string[] = ['numbers', 'date', 'math'];

  numbersForm!: FormGroup;
  dateForm!: FormGroup;
  mathForm!: FormGroup;

  numberValue: string = '';
  dateValue: string = '';
  mathValue: string = '';

  numbersArray: string[] = [];
  dateArray: string[] = [];
  mathArray: string[] = [];

  ngOnInit() {
    this.numbersForm = new FormGroup({
      numberValue: new FormControl('', Validators.required),
    });
    this.numbersArray = this.randomizerService.generateArray('trivia');

    this.dateForm = new FormGroup({
      dateValue: new FormControl('', Validators.required),
    });
    this.dateArray = this.randomizerService.generateArray('date');

    this.mathForm = new FormGroup({
      mathValue: new FormControl('', Validators.required),
    });
    this.mathArray = this.randomizerService.generateArray('math');
  }

  getFact(type: string, number: string) {
    this.messageService.generateMessage(type, number);
  }
}
