import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppController as App2Controller } from './app2.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, App2Controller],
  providers: [AppService],
})
export class AppModule {}
