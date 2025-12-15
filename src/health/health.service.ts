import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class HealthService {
  healthz(): string {
    return 'OK!';
  }

  readyz(): string {
    return 'OK!';
  }

}
