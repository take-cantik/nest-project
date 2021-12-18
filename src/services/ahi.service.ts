import { Injectable } from '@nestjs/common';

@Injectable()
export class AhiService {
  createAhi(): string {
    return 'ahi!';
  }

  getAhiahi(): string {
    return 'ahiahi';
  }

  getAhiId(id: string): string {
    return `${id} ha kitto tuyoku nareru!`;
  }
}
