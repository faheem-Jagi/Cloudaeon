import { Component, OnInit } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { Iuser } from '../shared/iuser';
import { UserService } from '../shared/user.service';
import { ConfirmationService } from 'primeng/api';
import { DialogService} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [ConfirmationService, DialogService],
  entryComponents: [
    EditUserComponent
  ]
})
export class UsersListComponent implements OnInit {

  public columns: any[];
  public allUsers: Iuser[] = [];

  constructor(private _userService: UserService,  private _dialogService: DialogService, private _confirmationService: ConfirmationService) {
    this.columns = [
      { field: 'sr_no', header: 'Sr. No.' },
      { field: 'first_name', header: 'First Name' },
      { field: 'last_name', header: 'Last name' },      
      { field: 'email', header: 'Email' },      
      { field: 'id', header: '' },
    ];
   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    try {
      this._userService.getUsers().subscribe(res => {
        this.allUsers = res as Iuser[];
      },err => {
        console.log(err.message);
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  
  //Update Method
  UpdateDialog(user: Iuser) {
    try {
      let selectedUser: Iuser;
      selectedUser = {
        id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email, password: user.password
      };

      const ref = this._dialogService.open(EditUserComponent, {
        header: 'Update User',
        data: selectedUser,
        contentStyle: { "overflow": "auto" },
        width: '35%'
      });

      ref.onClose.subscribe((status: any) => {
        if (status) {
          this.getAllUsers();
        }
      });
    }
    catch (err) {
      console.log(err.message);
    }
  }

   //Delete Method
   DeleteDialog(menuID: number) {
    try {
      this._confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.DeleteMenu(menuID);
        },
        reject: () => {
        }
      });
    }
    catch (err) {
      console.log(err.message);
    }
  }

  //Remove Method
  DeleteMenu(id: number) {
    try {
      this._userService.deleteUser(id)
        .subscribe((res: any) => {
          alert('User Deleted');
          this.getAllUsers();
        });
    }
    catch (err) {
      console.log(err.message);
    }
  }

}
