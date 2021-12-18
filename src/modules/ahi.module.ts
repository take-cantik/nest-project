import { Module } from '@nestjs/common';
import { AhiController } from 'src/controllers/ahi.controller';
import { AhiService } from 'src/services/ahi.service';

@Module({
  controllers: [AhiController],
  providers: [AhiService],
})
export class AhiModule {
  constructor(private ahiService: AhiService) {}
}
