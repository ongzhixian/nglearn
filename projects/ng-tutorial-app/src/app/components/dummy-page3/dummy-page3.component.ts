import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-dummy-page3',
  templateUrl: './dummy-page3.component.html',
  styleUrls: ['./dummy-page3.component.css']
})
export class DummyPage3Component implements OnInit {

  constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.logService.add("In DummyPage3Component OnInit");
  }

}