import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('ahi')
export class AhiController {
  @Post()
  createAhi(): string {
    return 'ahi!';
  }

  @Get()
  getAhiahi(): string {
    return 'ahiahi';
  }

  @Get(':id')
  getAhiId(@Param() params): string {
    console.log(params.id);
    return `${params.id} ha kitto tuyoku nareru`;
  }
}
