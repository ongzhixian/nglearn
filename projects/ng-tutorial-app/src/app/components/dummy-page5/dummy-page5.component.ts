import { Component, OnInit } from '@angular/core';
import { EchoWebSocketService } from '../../services/echo-web-socket.service';
import { LogService } from '../../services/log.service';

// import { webSocket } from "rxjs/webSocket";
import { Socket } from "engine.io-client";

@Component({
  selector: 'app-dummy-page5',
  templateUrl: './dummy-page5.component.html',
  styleUrls: ['./dummy-page5.component.css']
})
export class DummyPage5Component implements OnInit {

  // private subject = webSocket("ws://localhost:45000/socket.io/");
  private socket = new Socket('ws://localhost:45000');

  constructor(
    private log: LogService
  ) { 
  }

  ngOnInit(): void {
    // this.subject.subscribe(
    //   msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
    //   err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    //   () => console.log('complete') // Called when connection is closed (for whatever reason).
    // );
    this.socket.on('open', () => {
      // this.socket.send('Hello World!');
    
      this.socket.on('message', (data) => {
        console.log(data);
      });
      this.socket.on('close', () => {
        console.log('close');
      });
    });
  }

  private message = {
    author: "tset messa",
    message: "this is a test message"
  };

  onClick() {
    // console.log('dummyPage5 -- clicked');
    // console.log("new message from client to websocket: ", this.message);
    // this.echoWebSocket.messages.next(this.message);
    // this.message.message = "";
    // this.subject.next("asd");
    this.socket.send("AA", null);
  }
}
