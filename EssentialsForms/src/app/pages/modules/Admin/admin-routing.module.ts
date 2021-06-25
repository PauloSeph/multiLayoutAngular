import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from 'src/app/_layout/dashboard/admin-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { AdminHomeComponent } from './component/adminHome.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';



const routes: Routes = [
{
  path: '', component: AdminLoginComponent,
},
{
  path: '', component: AdminLayoutComponent, children: [
    {
      path: 'dashboard', children: [
        {
          path: '', component: AdminHomeComponent
        },
        {
          path: 'userRegister', component: UserRegisterComponent
        },
      ]
    },

    // {
    //   path: 'articleRegister', component: ArticleRegisterComponent
    // }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
