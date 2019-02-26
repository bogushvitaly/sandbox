import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mock",
  templateUrl: "./mock-server.component.html",
  styleUrls: ["./mock-server.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MockServerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
