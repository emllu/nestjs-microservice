import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UserModule, {
    transport: Transport.TCP,
    options: { host: '127.0.0.1', port: 3003 }, // User Service listens here
  });

  await app.listen();
  console.log('User Service is running on port 3003');
}
bootstrap();
