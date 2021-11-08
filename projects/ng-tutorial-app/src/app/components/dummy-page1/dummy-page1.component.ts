import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-dummy-page1',
  templateUrl: './dummy-page1.component.html',
  styleUrls: ['./dummy-page1.component.css']
})
export class DummyPage1Component implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logService.add("In DummyPage1Component OnInit");
  }

}
