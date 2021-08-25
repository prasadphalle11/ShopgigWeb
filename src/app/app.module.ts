import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { SidebarComponent } from './sidebar/sidebar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Registration_PageComponent } from './Registration_Page/Registration_Page.component';
import { Forgot_PasswordComponent } from './Forgot_Password/Forgot_Password.component';
import { LogINComponent } from './login/LogIN/LogIN.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  
    SidebarComponent,
    PageHeaderComponent,
    DashboardComponent,

    LogINComponent,
    Registration_PageComponent,
    Forgot_PasswordComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
