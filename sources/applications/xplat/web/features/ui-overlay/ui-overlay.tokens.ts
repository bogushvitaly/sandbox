import { InjectionToken } from '@angular/core';

import { Image } from './services';

export const OVERLAY_DATA = new InjectionToken<Image>('OVERLAY_DATA');
