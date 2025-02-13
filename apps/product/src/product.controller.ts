import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('get_all_products') // Listening for this message from API Gateway
  getAllProducts() {
    return this.productService.getAllProducts();
  }
}
