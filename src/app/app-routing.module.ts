import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Forgot_Password } from './Forgot_Password/Forgot_Password';
import { LogINComponent } from './login/LogIN/LogIN.component';
import { Registration_Page } from './Registration_Page/Registration_Page';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InventoryCategoryComponent } from './InventoryCategory/InventoryCategory.component';
import { StoreComponent } from './store/store.component';
import { InventoryComponent } from './Inventory/Inventory.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'Registration_Page',
    component:Registration_Page
  },
  {
     path: 'Forgot_Password',
     component:Forgot_Password
    },
  {
     path: 'login',
     component:LogINComponent
    },
    {
      path: 'dashboard',
      component:DashboardComponent
     },
     {
      path: 'Category',
      component:InventoryCategoryComponent
     },
     {
      path: 'store',
      component:StoreComponent
     },
     {
      path: 'Inventory',
      component:InventoryComponent
     }
    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
