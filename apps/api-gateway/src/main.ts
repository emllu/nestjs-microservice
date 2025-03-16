import { NestFactory } from '@nestjs/core';
import { AppModule } from './api-gateway.module';
import { console } from 'inspector/promises';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: '*',
    });

    await app.listen(3001);
    console.log(` API Gateway is running on http://localhost:3001}`);
  } catch (error) {
    console.error(' Failed to start API Gateway:', error);
  }
}
bootstrap();
