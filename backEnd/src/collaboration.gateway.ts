/* eslint-disable prettier/prettier */
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors:{origin:'*'}
})
export class CollaborationGateway {
  @WebSocketServer()
  server: any;
  @SubscribeMessage('message')
  handleMessages(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}
