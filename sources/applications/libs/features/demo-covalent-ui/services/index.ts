import { DemoCovalentUiAlertsService } from './demo-covalent-ui-alerts.service';
import { DemoCovalentUiItemsService } from './demo-covalent-ui-items.service';
import { DemoCovalentUiProductsService } from './demo-covalent-ui-products.service';
import { DemoCovalentUiUserService } from './demo-covalent-ui-user.service';

export const DEMOCOVALENTUI_PROVIDERS = [
  DemoCovalentUiItemsService,
  DemoCovalentUiProductsService,
  DemoCovalentUiAlertsService,
  DemoCovalentUiUserService
];

export * from './demo-covalent-ui-items.service';
export * from './demo-covalent-ui-products.service';
export * from './demo-covalent-ui-alerts.service';
export * from './demo-covalent-ui-user.service';
