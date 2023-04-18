import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    allowedHeaders: ['content-type', 'authorization'],
    exposedHeaders: ['authorization'],
    origin: 'http://localhost:80',
    credentials: true,
  })
  await app.listen(4001)
}
bootstrap()
