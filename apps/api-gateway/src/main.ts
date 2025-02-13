import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  // Enable Microservice Communication
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: '127.0.0.1', port: 3002 }, // API Gateway Microservice Port
  });

  await app.startAllMicroservices();
  await app.listen(3000); // API Gateway HTTP Port
  console.log('API Gateway is running on http://localhost:3000');
}
bootstrap();
