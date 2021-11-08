import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-dummy-page2',
  templateUrl: './dummy-page2.component.html',
  styleUrls: ['./dummy-page2.component.css']
})
export class DummyPage2Component implements OnInit {

  constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.logService.add("In DummyPage2Component OnInit");
  }

}
