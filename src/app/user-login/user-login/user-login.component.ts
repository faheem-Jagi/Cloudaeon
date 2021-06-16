import { Component, OnInit } from '@angular/core';
import { Ilogin } from './shared/ilogin';
import { LoginService } from './shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public loginUser: Ilogin = {};
  public invalidDetails : boolean = false
  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  login(){
    try {
      this._loginService.login(this.loginUser).subscribe(res => {
        if(res != false){
          this._router.navigate(['users']);
            this.invalidDetails = false;

        }else{

          this.invalidDetails = true;

        }
      },err => {
        console.log(err)
      })
    } catch (err) {
      console.log(err.message);
    }
  }

}
