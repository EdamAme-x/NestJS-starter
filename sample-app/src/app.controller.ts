import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
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

  @Post('name/:param')
  getPathParameters(@Param('param') param: string): string {
    return `My Name is ${param}`;
  }

  @Post('i-am-*')
  getGreet(): string {
    return "hi!"
  }
}
