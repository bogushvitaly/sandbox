import { stack, VERSION } from '@frontend/version';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('data')
  getData(): string {
    return this.appService.getData();
  }

  @Get('status')
  status(): any {
    const { uptime, arch, version, platform } = process;
    return {
      version: VERSION,
      stack,
      server: {
        uptime: uptime(),
        arch,
        version,
        platform
      }
    };
  }
}
