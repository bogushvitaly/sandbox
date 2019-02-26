import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort } from "@angular/material";

import { TableDataSource } from "./table-datasource";

import { DemoMaterialTableBaseComponent } from "@applications/features";

@Component({
  selector: "app-demo-material-table",
  templateUrl: "demo-material-table.component.html",
  styleUrls: ["demo-material-table.component.scss"]
})
export class DemoMaterialTableComponent extends DemoMaterialTableBaseComponent
  implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  constructor() {
    super();
  }

  ngOnInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort);
  }
}
