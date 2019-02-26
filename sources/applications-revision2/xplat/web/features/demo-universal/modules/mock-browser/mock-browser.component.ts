import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mock",
  templateUrl: "./mock-browser.component.html",
  styleUrls: ["./mock-browser.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MockBrowserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
