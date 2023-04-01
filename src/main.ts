import { ConsoleLogger, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './shared/utils/setup-swagger';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger(),
  });

  setupSwagger(app);

  //* Here we add our microservices

  await app.startAllMicroservices();

  //* logger.log("All Microservices already started")

  await app.listen(3000, () => {
    logger.log('Base Service Server is listening the port 3000');
  });
}
bootstrap();
