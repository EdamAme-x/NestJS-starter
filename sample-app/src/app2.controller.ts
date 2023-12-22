import { Body, Controller, Get, Post, Query, HttpCode, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api2")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(201)
  @Header("Content-Type", "application/json")
  getHello(): string {
    return JSON.stringify({
        "name": "amex2189"
    });
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
