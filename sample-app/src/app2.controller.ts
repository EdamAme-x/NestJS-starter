import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api2")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("query")
  getQuery(@Query("id") id): string {
    return id;
  }

  @Post("body")
  getBody(@Body("id") id): string {
    console.log(id)
    return "hey body!"
  }
}
