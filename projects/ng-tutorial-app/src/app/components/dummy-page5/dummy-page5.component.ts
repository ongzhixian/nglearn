import { Component, OnInit } from '@angular/core';
import { EchoWebSocketService } from '../../services/echo-web-socket.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-dummy-page5',
  templateUrl: './dummy-page5.component.html',
  styleUrls: ['./dummy-page5.component.css']
})
export class DummyPage5Component implements OnInit {

  constructor(
    private echoWebSocket: EchoWebSocketService,
    private log: LogService
  ) { }

  ngOnInit(): void {
  }

  private message = {
    author: "tset messa",
    message: "this is a test message"
  };

  onClick() {
    console.log('dummyPage5 -- clicked');
    console.log("new message from client to websocket: ", this.message);
    this.echoWebSocket.messages.next(this.message);
    this.message.message = "";
    
  }
}
