import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { MySseService } from '../../services/my-sse.service';

@Component({
  selector: 'app-dummy-page4',
  templateUrl: './dummy-page4.component.html',
  styleUrls: ['./dummy-page4.component.css']
})
export class DummyPage4Component implements OnInit {

  constructor(
    private mySseService: MySseService,
    private log: LogService

  ) { }

  ngOnInit(): void {
    this.mySseService.getServerSentEvent('http://localhost:3000/my-endpoint').subscribe((data: any) => { 
        console.log(data);
        let m = JSON.parse(data.data).msg;
        this.log.add(m);
    });
  }
}
