import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebSocketService } from './web-socket.service';

const CHAT_URL = 'ws://localhost:45000/socket.io/';


export interface ChatMessage {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EchoWebSocketService {

  public messages: Subject<ChatMessage>;

  constructor(wsService: WebSocketService) {
    this.messages = <Subject<ChatMessage>>wsService.connect(CHAT_URL).pipe(
      map(
        (response: MessageEvent<any>): ChatMessage => {
          let data = JSON.parse(response.data);
          return {
            author: data.author,
            message: data.message
          };
        })
    );
  }
}
