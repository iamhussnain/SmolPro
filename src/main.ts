import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { TrimStringsPipe } from './modules/common/transformer/trim-strings.pipe';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

const dotenv = require('dotenv');
dotenv.config();
const {SERVER_PORT:port} = process.env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.enableCors();
  app.useGlobalPipes(new TrimStringsPipe(), new ValidationPipe());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.setGlobalPrefix('api/v1')
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
}
bootstrap();
