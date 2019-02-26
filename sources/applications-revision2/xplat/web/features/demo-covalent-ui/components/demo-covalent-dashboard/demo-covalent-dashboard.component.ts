import { DatePipe } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { MatDialog, MatIconRegistry } from "@angular/material";
import { DomSanitizer, Title } from "@angular/platform-browser";
import {
  TdDigitsPipe,
  TdLayoutManageListComponent,
  TdMediaService,
  tdRotateAnimation
} from "@covalent/core";
import { TdLoadingService } from "@covalent/core/loading";

import { multi, multiChart, pie, singleChart, times } from "./data";

import {
  CovalentUser,
  DemoCovalentDashboardBaseComponent,
  DemoCovalentUiAlertsService,
  DemoCovalentUiItemsService,
  DemoCovalentUiProductsService,
  DemoCovalentUiUserService
} from "@applications/features";

@Component({
  selector: "app-demo-covalent-dashboard",
  templateUrl: "demo-covalent-dashboard.component.html",
  styleUrls: ["demo-covalent-dashboard.component.scss"],
  animations: [tdRotateAnimation],
  viewProviders: [
    DemoCovalentUiItemsService,
    DemoCovalentUiProductsService,
    DemoCovalentUiAlertsService
  ]
})
export class DemoCovalentDashboardComponent
  extends DemoCovalentDashboardBaseComponent
  implements OnInit, AfterViewInit {
  @ViewChild("manageList") manageList: TdLayoutManageListComponent;
  @ViewChild("dialogContent") template: TemplateRef<any>;

  name = "UI Platform";

  // Chart
  singleChart: any[];
  multiChart: any[];

  pie: any[];
  single: any[];
  multi: any[];
  times: any[];

  miniNav = false;

  // Timeframe
  dateFrom: Date = new Date(new Date().getTime() - 2 * 60 * 60 * 24 * 1000);
  dateTo: Date = new Date(new Date().getTime() - 1 * 60 * 60 * 24 * 1000);

  // Dialog
  config = {
    width: "50%",
    height: "50%"
  };

  // Nav
  routes = [
    {
      title: "Dashboards",
      route: "/",
      icon: "dashboard"
    },
    {
      title: "Reports",
      route: "/",
      icon: "insert_chart"
    },
    {
      title: "Sales",
      route: "/",
      icon: "account_balance"
    },
    {
      title: "Marketplace",
      route: "/",
      icon: "store"
    }
  ];
  usermenu = [
    {
      title: "Profile",
      route: "/",
      icon: "account_box"
    },
    {
      title: "Settings",
      route: "/",
      icon: "settings"
    }
  ];

  // Data table
  data: any[] = [
    {
      name: "Frozen yogurt",
      type: "Ice cream",
      calories: 159.0,
      fat: 6.0,
      carbs: 24.0,
      protein: 4.0
    },
    {
      name: "Ice cream sandwich",
      type: "Ice cream",
      calories: 237.0,
      fat: 9.0,
      carbs: 37.0,
      protein: 4.3
    },
    {
      name: "Eclair",
      type: "Pastry",
      calories: 262.0,
      fat: 16.0,
      carbs: 24.0,
      protein: 6.0
    },
    {
      name: "Cupcake",
      type: "Pastry",
      calories: 305.0,
      fat: 3.7,
      carbs: 67.0,
      protein: 4.3
    },
    {
      name: "Jelly bean",
      type: "Candy",
      calories: 375.0,
      fat: 0.0,
      carbs: 94.0,
      protein: 0.0
    },
    {
      name: "Lollipop",
      type: "Candy",
      calories: 392.0,
      fat: 0.2,
      carbs: 98.0,
      protein: 0.0
    },
    {
      name: "Honeycomb",
      type: "Other",
      calories: 408.0,
      fat: 3.2,
      carbs: 87.0,
      protein: 6.5
    },
    {
      name: "Donut",
      type: "Pastry",
      calories: 452.0,
      fat: 25.0,
      carbs: 51.0,
      protein: 4.9
    },
    {
      name: "KitKat",
      type: "Candy",
      calories: 518.0,
      fat: 26.0,
      carbs: 65.0,
      protein: 7.0
    },
    {
      name: "Chocolate",
      type: "Candy",
      calories: 518.0,
      fat: 26.0,
      carbs: 65.0,
      protein: 7.0
    },
    {
      name: "Chamoy",
      type: "Candy",
      calories: 518.0,
      fat: 26.0,
      carbs: 65.0,
      protein: 7.0
    }
  ];

  // Current date
  year: any = new Date().getFullYear();

  items: Object[];
  users: CovalentUser[];
  products: Object[];
  alerts: Object[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = "";
  showYAxisLabel = true;
  yAxisLabel = "Sales";

  colorScheme: any = {
    domain: ["#1565C0", "#2196F3", "#81D4FA", "#FF9800", "#EF6C00"]
  };

  // line, area
  autoScale = true;
  theme(theme: string): void {
    localStorage.setItem("theme", theme);
  }

  // Theme toggle
  get activeTheme(): string {
    return localStorage.getItem("theme");
  }

  constructor(
    private titleService: Title,
    private itemsService: DemoCovalentUiItemsService,
    private userService: DemoCovalentUiUserService,
    private alertsService: DemoCovalentUiAlertsService,
    private productsService: DemoCovalentUiProductsService,
    private loadingService: TdLoadingService,
    private media: TdMediaService,
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    super();
    // Chart
    this.multi = multi.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });

    this.iconRegistry.addSvgIconInNamespace(
      "assets",
      "covalent",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg"
      )
    );

    Object.assign(this, { pie, singleChart, multiChart, times });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Covalent Quickstart");
    this.loadingService.register("items.load");
    this.itemsService.query().subscribe(
      (items: Object[]) => {
        this.items = items;
        setTimeout(() => {
          this.loadingService.resolve("items.load");
        }, 100);
      },
      (error: Error) => {
        this.itemsService.staticQuery().subscribe((items: Object[]) => {
          this.items = items;
          setTimeout(() => {
            this.loadingService.resolve("items.load");
          }, 100);
        });
      }
    );
    this.loadingService.register("alerts.load");
    this.alertsService.query().subscribe((alerts: Object[]) => {
      this.alerts = alerts;
      setTimeout(() => {
        this.loadingService.resolve("alerts.load");
      }, 100);
    });
    this.loadingService.register("products.load");
    this.productsService.query().subscribe((products: Object[]) => {
      this.products = products;
      setTimeout(() => {
        this.loadingService.resolve("products.load");
      }, 100);
    });
    this.loadingService.register("favorites.load");
    this.productsService.query().subscribe((products: Object[]) => {
      this.products = products;
      setTimeout(() => {
        this.loadingService.resolve("favorites.load");
      }, 100);
    });
    this.loadingService.register("users.load");
    this.userService.query().subscribe(
      (users: CovalentUser[]) => {
        this.users = users;
        setTimeout(() => {
          this.loadingService.resolve("users.load");
        }, 100);
      },
      (error: Error) => {
        this.userService.staticQuery().subscribe((users: CovalentUser[]) => {
          this.users = users;
          setTimeout(() => {
            this.loadingService.resolve("users.load");
          }, 100);
        });
      }
    );
  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this.changeDetectorRef.detectChanges();
  }

  toggleMiniNav(): void {
    this.miniNav = !this.miniNav;
  }

  openTemplate() {
    this.dialog.open(this.template, this.config);
  }

  axisDate(val: string): string {
    return new DatePipe("en").transform(val, "hh a");
  }
}
