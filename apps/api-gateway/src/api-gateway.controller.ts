import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api-gateway.service';

@Controller()
export class AppController {
  constructor(private readonly appService: ApiService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}