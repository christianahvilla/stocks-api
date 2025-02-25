import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const API_PREFIX = 'api';
const VERSION_PREFIX = 'v1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(`${API_PREFIX}/${VERSION_PREFIX}`);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const isProduction = process.env.NODE_ENV === 'production';
  const port = configService.get<number>('PORT');

  if (isProduction && !port) {
    console.log('Running in production mode without specifying a port.');
    await app.listen(0);
  } else {
    await app.listen(port!); //  It is used on Prod
    console.log(`Server running on port ${port}`);
  }
}

bootstrap();
