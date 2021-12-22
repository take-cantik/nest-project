import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AhiService } from 'src/services/ahi.service';

@Controller('ahi')
export class AhiController {
  constructor(private readonly ahiService: AhiService) {}

  @Post()
  createAhi(): string {
    return this.ahiService.createAhi();
  }

  @Get()
  getAhiahi(): string {
    return this.ahiService.getAhiahi();
  }

  @Get(':id')
  getAhiId(@Param('id', ParseIntPipe) id: string): string {
    return this.ahiService.getAhiId(id);
  }
}
