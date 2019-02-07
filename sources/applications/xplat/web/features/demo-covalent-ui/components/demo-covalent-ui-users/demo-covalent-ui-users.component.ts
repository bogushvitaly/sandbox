import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { TdDialogService } from '@covalent/core/dialogs';
import { TdLoadingService } from '@covalent/core/loading';
import { TdMediaService } from '@covalent/core/media';

import {
  CovalentUser,
  DemoCovalentUiUsersBaseComponent,
  DemoCovalentUiUserService
} from '@application/features';

@Component({
  selector: 'app-demo-covalent-ui-users',
  templateUrl: 'demo-covalent-ui-users.component.html'
})
export class DemoCovalentUiUsersComponent extends DemoCovalentUiUsersBaseComponent implements OnInit {
  users: CovalentUser[];
  filteredUsers: CovalentUser[];

  constructor(
    private _titleService: Title,
    private _loadingService: TdLoadingService,
    private _dialogService: TdDialogService,
    private _snackBarService: MatSnackBar,
    private _userService: DemoCovalentUiUserService,
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService
  ) {
    super();
  }

  ngOnInit(): void {
    this._titleService.setTitle('Covalent Users');
    this.load();
  }

  filterUsers(displayName: string = ''): void {
    this.filteredUsers = this.users.filter((user: CovalentUser) => {
      return user.displayName.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
    });
  }

  async load(): Promise<void> {
    try {
      this._loadingService.register('users.list');
      this.users = await this._userService.query().toPromise();
    } catch (error) {
      this.users = await this._userService.staticQuery().toPromise();
    } finally {
      this.filteredUsers = Object.assign([], this.users);
      this._loadingService.resolve('users.list');
    }
  }

  delete(id: string): void {
    this._dialogService
      .openConfirm({ message: 'Are you sure you want to delete this user?' })
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
      this._loadingService.register('users.list');
      await this._userService.delete(id).toPromise();
      this.users = this.users.filter((user: CovalentUser) => {
        return user.id !== id;
      });
      this.filteredUsers = this.filteredUsers.filter((user: CovalentUser) => {
        return user.id !== id;
      });
      this._snackBarService.open('User Deleted', 'Ok');
    } catch (error) {
      this._dialogService.openAlert({ message: 'There was an error trying to delete the user' });
    } finally {
      this._loadingService.resolve('users.list');
    }
  }
}
