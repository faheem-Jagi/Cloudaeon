import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisterRoutingModule } from './user-register-routing.module';
import { SharedModule } from '../shared-module/shared.module';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
    SharedModule
  ]
})
export class UserRegisterModule { }
