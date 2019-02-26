import { BaseComponent, StatusService } from "@applications/core";

export abstract class NotFoundBaseComponent extends BaseComponent {
  text = "NotFound";

  constructor(statusService: StatusService) {
    super();
  }
}
