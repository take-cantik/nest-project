import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AhiModule } from './modules/ahi.module';
import { AppService } from './services/app.service';

@Module({
  imports: [AhiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
