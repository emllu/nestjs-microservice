import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(@Inject('PRODUCT_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  async getAllProducts() {
    return this.client.send('get_all_products', {}); // Send request to Product Service
  }
}
