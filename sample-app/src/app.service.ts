import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTime(): string {
    return new Date(Date.now()).toLocaleDateString();
  }
}
