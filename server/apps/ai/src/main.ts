import { NestFactory } from '@nestjs/core';
import { AiModule } from './ai.module';
import { config } from '@en/config';
import { InterceptorExceptionFilter, InterceptorInterceptor } from '@libs/shared';


async function bootstrap() {
  const app = await NestFactory.create(AiModule);
  app.useGlobalInterceptors(new InterceptorInterceptor());
  app.useGlobalFilters(new InterceptorExceptionFilter());
  await app.listen(config.port.ai);
}
bootstrap();
