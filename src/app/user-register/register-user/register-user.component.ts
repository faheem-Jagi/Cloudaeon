import { Component, OnInit } from '@angular/core';
import { Iregister } from './shared/iregister';
import { RegisterService } from './shared/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public userRegister: Iregister = {};

  public isRegistered : boolean = false;

  constructor(private _registerService: RegisterService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    try {
      this._registerService.userRegister(this.userRegister).subscribe(res => {
        if(res){
         // this._router.navigate(['login']);
         // alert('User Registered...');
         this.isRegistered = true;
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  }

}
