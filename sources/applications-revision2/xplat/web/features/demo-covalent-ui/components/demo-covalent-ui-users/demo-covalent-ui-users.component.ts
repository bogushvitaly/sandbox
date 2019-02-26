import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Title } from "@angular/platform-browser";
import { TdDialogService } from "@covalent/core/dialogs";
import { TdLoadingService } from "@covalent/core/loading";
import { TdMediaService } from "@covalent/core/media";

import {
  CovalentUser,
  DemoCovalentUiUsersBaseComponent,
  DemoCovalentUiUserService
} from "@applications/features";

@Component({
  selector: "app-demo-covalent-ui-users",
  templateUrl: "demo-covalent-ui-users.component.html"
})
export class DemoCovalentUiUsersComponent
  extends DemoCovalentUiUsersBaseComponent
  implements OnInit {
  users: CovalentUser[];
  filteredUsers: CovalentUser[];

  constructor(
    private titleService: Title,
    private loadingService: TdLoadingService,
    private dialogService: TdDialogService,
    private snackBarService: MatSnackBar,
    private userService: DemoCovalentUiUserService,
    private changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService
  ) {
    super();
  }

  ngOnInit(): void {
    this.titleService.setTitle("Covalent Users");
    this.load();
  }

  filterUsers(displayName: string = ""): void {
    this.filteredUsers = this.users.filter((user: CovalentUser) => {
      return (
        user.displayName.toLowerCase().indexOf(displayName.toLowerCase()) > -1
      );
    });
  }

  async load(): Promise<void> {
    try {
      this.loadingService.register("users.list");
      this.users = await this.userService.query().toPromise();
    } catch (error) {
      this.users = await this.userService.staticQuery().toPromise();
    } finally {
      this.filteredUsers = Object.assign([], this.users);
      this.loadingService.resolve("users.list");
    }
  }

  delete(id: string): void {
    this.dialogService
      .openConfirm({ message: "Are you sure you want to delete this user?" })
      .afterClosed()
      .toPromise()
      .then((confirm: boolean) => {
        if (confirm) {
          this._delete(id);
        }
      });
  }

  private async _delete(id: string): Promise<void> {
    try {
      this.loadingService.register("users.list");
      await this.userService.delete(id).toPromise();
      this.users = this.users.filter((user: CovalentUser) => {
        return user.id !== id;
      });
      this.filteredUsers = this.filteredUsers.filter((user: CovalentUser) => {
        return user.id !== id;
      });
      this.snackBarService.open("User Deleted", "Ok");
    } catch (error) {
      this.dialogService.openAlert({
        message: "There was an error trying to delete the user"
      });
    } finally {
      this.loadingService.resolve("users.list");
    }
  }
}
