import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Forgot_PasswordComponent } from './Forgot_Password/Forgot_Password.component';
import { LogINComponent } from './login/LogIN/LogIN.component';
import { Registration_PageComponent } from './Registration_Page/Registration_Page.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'Registration_PageComponent',
    component:Registration_PageComponent
  },
  {
     path: 'Forgot_PasswordComponent',
     component:Forgot_PasswordComponent
    },
  {
     path: 'login',
     component:LogINComponent
    },
    {
      path: 'dashboard',
      component:DashboardComponent
     }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
