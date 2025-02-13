import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'iPhone 15', price: 1200 },
    { id: 2, name: 'Samsung S23', price: 1100 },
  ];

  getAllProducts() {
    return this.products;
  }
}
