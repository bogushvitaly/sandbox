import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { TdDialogService } from "@covalent/core/dialogs";
import { TdLoadingService } from "@covalent/core/loading";

import {
  CovalentUser,
  DemoCovalentUiUserService,
  DemoCovalentUiUsersFormBaseComponent
} from "@applications/features";

@Component({
  selector: "app-demo-covalent-ui-users-form",
  templateUrl: "demo-covalent-ui-users-form.component.html"
})
export class DemoCovalentUiUsersFormComponent
  extends DemoCovalentUiUsersFormBaseComponent
  implements OnInit {
  displayName: string;
  email: string;
  id: string;
  admin: boolean;
  user: CovalentUser;
  action: string;

  constructor(
    private userService: DemoCovalentUiUserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBarService: MatSnackBar,
    private loadingService: TdLoadingService,
    private dialogService: TdDialogService
  ) {
    super();
  }

  goBack(): void {
    this.router.navigate(["/users"]);
  }

  ngOnInit(): void {
    this.route.url.subscribe((url: any) => {
      this.action = url.length > 1 ? url[1].path : "add";
    });
    this.route.params.subscribe((params: { id: string }) => {
      this.id = params.id;
      if (this.id) {
        this.load();
      }
    });
  }

  async load(): Promise<void> {
    try {
      this.loadingService.register("user.form");
      let user: CovalentUser = await this.userService.get(this.id).toPromise();
      this.displayName = user.displayName;
      this.email = user.email;
      this.admin = user.siteAdmin === 1 ? true : false;
    } catch (error) {
      this.dialogService.openAlert({
        message: "There was an error loading the user"
      });
    } finally {
      this.loadingService.resolve("user.form");
    }
  }

  async save(): Promise<void> {
    try {
      this.loadingService.register("user.form");
      let siteAdmin: number = this.admin ? 1 : 0;
      let now: Date = new Date();
      this.user = {
        displayName: this.displayName,
        email: this.email,
        siteAdmin,
        id: this.id || this.displayName.replace(/\s+/g, "."),
        created: now,
        lastAccess: now
      };
      if (this.action === "add") {
        await this.userService.create(this.user).toPromise();
      } else {
        await this.userService.update(this.id, this.user).toPromise();
      }
      this.snackBarService.open("User Saved", "Ok");
      this.goBack();
    } catch (error) {
      this.dialogService.openAlert({
        message: "There was an error saving the user"
      });
    } finally {
      this.loadingService.resolve("user.form");
    }
  }
}
