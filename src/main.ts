import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Bật CORS để cho phép Frontend (Vercel / Localhost) gọi API thoải mái
  app.enableCors({
    origin: '*', // Sau này có thể giới hạn domain cụ thể của Frontend trên Vercel
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();