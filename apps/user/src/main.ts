import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.enableCors();
  await app.listen(3003); // User Microservice runs GraphQL on port 3003
  console.log('User GraphQL Service running on http://localhost:3003/graphql');
}
bootstrap();
