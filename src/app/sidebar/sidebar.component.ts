import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
debugger;
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

}
