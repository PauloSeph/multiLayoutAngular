import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegisterComponent } from './dashboard/user/user-register/user-register.component';
import { AdminHomeComponent } from './dashboard/admin-home/adminHome.component';
import { UsersComponent } from './dashboard/user/users/users.component';





@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminLoginComponent,
    UserRegisterComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
