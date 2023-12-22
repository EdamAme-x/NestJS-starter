import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("time")
  getTime(): string {
    return this.appService.getTime()
  }

  @Post("time-post")
  getTimePost(): string {
    return this.appService.getTime()
  }

  
}
