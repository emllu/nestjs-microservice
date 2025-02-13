import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  constructor(@Inject('PRODUCT_SERVICE') private readonly client: ClientProxy) {}

  getAllProducts() {
    return this.client.send('get_all_products', {}); 
  }
}
