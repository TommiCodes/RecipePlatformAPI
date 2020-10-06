import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as compression from 'compression';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
require('newrelic');
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(helmet());
  app.use(compression());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  const options = new DocumentBuilder()
    .setTitle('Recipe API')
    .setDescription('The recipes API description')
    .setVersion('1.0')
    .addTag('recipes')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/spec', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
