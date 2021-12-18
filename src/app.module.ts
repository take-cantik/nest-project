import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AhiModule } from './modules/ahi.module';
import { AppService } from './services/app.service';

@Module({
  imports: [AhiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('ahi');
  }
}
