import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { UserModule } from './user.module';


async function bootstrap() {
  try {
    const app = await NestFactory.create(UserModule);

    app.enableCors({
      origin: '*',
    });

    await app.listen(4002);
    console.log(`API Gateway is running on http://localhost:4002`);
  } catch (error) {
    console.error(' Failed to start API Gateway:', error);
  }
}
bootstrap();
