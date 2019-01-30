import { Controller, Get } from '@nestjs/common';

import { stack, VERSION } from '@application/version-data';

@Controller('status')
export class StatusController {}
