import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';

import { AboutComponent } from './modules/principal/about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './modules/principal/home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // Site routes
  {
    path: '',
    component: SiteLayoutComponent,
    loadChildren: () =>
    import('./modules/principal/principal.module').then( m => m.PrincipalModule)
  },

  // App Routes
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  },

  // No Layout Routes
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
