import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Iuser } from '../shared/iuser';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public selectedUser: Iuser = {};

  constructor(private _userService: UserService, private ref: DynamicDialogRef, private config: DynamicDialogConfig,) { }

  ngOnInit(): void {
    this.selectedUser = this.config.data;
  }

  updateUser() {
    try {
      this._userService.updateUser(this.selectedUser.id, this.selectedUser)
        .subscribe((res: any) => {
              alert('Users Updated');
              this.selectedUser = {};
              this.ref.close(true);
        });
    }
    catch (err) {
      console.log(err.message);
    }
  }

}
