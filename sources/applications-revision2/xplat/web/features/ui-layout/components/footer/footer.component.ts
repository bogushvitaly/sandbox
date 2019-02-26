import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { FooterBaseComponent } from "@applications/features";

const VERSION = "1.0.0";
const YEAR = 2019;

@Component({
  selector: "app-footer",
  templateUrl: "footer.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent extends FooterBaseComponent implements OnInit {
  version: string;
  year: number;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.version = VERSION;
    this.year = YEAR;
  }
}
