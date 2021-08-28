import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Registration_Page } from './Registration_Page/Registration_Page';
import { Forgot_Password } from './Forgot_Password/Forgot_Password';
import { LogINComponent } from './login/LogIN/LogIN.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { StoreComponent } from './store/store.component';
import { InventoryCategoryComponent } from './InventoryCategory/InventoryCategory.component';
import { FormsModule } from '@angular/forms';
import { AddEditStoreComponent } from './store/add-edit-store/add-edit-store.component';

@NgModule({
  declarations: [
    AppComponent,

    SidebarComponent,
    PageHeaderComponent,
    DashboardComponent,

    LogINComponent,
    Registration_Page,
    Forgot_Password,
    InventoryCategoryComponent,
    StoreComponent,
    AddEditStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
