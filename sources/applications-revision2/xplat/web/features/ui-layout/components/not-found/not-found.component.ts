import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { StatusService } from "@applications/core";
import { NotFoundBaseComponent } from "@applications/features";

@Component({
  selector: "app-not-found",
  templateUrl: "not-found.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent extends NotFoundBaseComponent implements OnInit {
  constructor(private statusService: StatusService) {
    super(statusService);
  }

  ngOnInit(): void {
    this.statusService.setStatus(404, "Not Found");
  }
}
