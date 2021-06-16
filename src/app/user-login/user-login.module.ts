import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { SharedModule } from '../shared-module/shared.module';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserLoginModule { }
