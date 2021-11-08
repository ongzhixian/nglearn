import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-display-log',
  templateUrl: './display-log.component.html',
  styleUrls: ['./display-log.component.css']
})
export class DisplayLogComponent implements OnInit {

  constructor(public logService: LogService) { }

  ngOnInit(): void {
  }

}
