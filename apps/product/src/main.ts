import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ProductModule, {
    transport: Transport.TCP,
    options: { host: '127.0.0.1', port: 3001 }, // Product Service listens here
  });

  await app.listen();
  console.log('Product Service is running on port 3001');
}
bootstrap();
