import { Component, OnInit } from '@angular/core';
import { EchoWebSocketService } from '../../services/echo-web-socket.service';
import { LogService } from '../../services/log.service';

// import { webSocket } from "rxjs/webSocket";
import { Socket } from "engine.io-client";

import { webSocket } from "rxjs/webSocket";

@Component({
  selector: 'app-dummy-page5',
  templateUrl: './dummy-page5.component.html',
  styleUrls: ['./dummy-page5.component.css']
})
export class DummyPage5Component implements OnInit {

  // private subject = webSocket("ws://localhost:45000/engine.io/?EIO=4&transport=websocket");
  // private subject = webSocket({
  //   url: "ws://localhost:45000/engine.io/?EIO=4&transport=websocket",
  //   deserializer: (s: MessageEvent) => {
  //     return s.data;
  //   }
  // });

  // Works; If using Socket from 'engine.io-client'
  private socket = new Socket('ws://localhost:45000');

  constructor(
    private log: LogService
  ) {
  }

  ngOnInit(): void {
    // this.subject.subscribe(
    //   msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
    //   error => {
    //     debugger;
    //     console.log(error);
    //   }, // Called if at any point WebSocket API signals some kind of error.
    //   () => console.log('complete') // Called when connection is closed (for whatever reason).
    // );

    // Working
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

  private clickCount = 0;

  onClick() {
    // console.log('dummyPage5 -- clicked');
    // console.log("new message from client to websocket: ", this.message);
    // this.echoWebSocket.messages.next(this.message);
    // this.message.message = "";
    // this.subject.next("asd");
    // Working
    this.socket.send(`AA: ${this.clickCount++}` , null);

    // this.subject.next({message: 'some message'});

    // this.subject.next("yahoo");
  }
}
