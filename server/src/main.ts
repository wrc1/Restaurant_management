import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = process.env.NODE_ENV ?? "development";
  if(env === "development"){
    app.enableCors();
  }
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
