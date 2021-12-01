import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PolarQuestion } from '../../models/PolarQuestion';

@Component({
  selector: 'app-polar-question',
  templateUrl: './polar-question.component.html',
  styleUrls: ['./polar-question.component.css']
})
export class PolarQuestionComponent implements OnInit {

  @Input()
  question!: PolarQuestion;

  @Output() next = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
