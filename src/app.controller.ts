import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendMail() {
    return this.appService.sendMail();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
