import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  getTest(): string {
    return 'Test!';
  }
}
