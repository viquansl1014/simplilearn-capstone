import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { AdminAuthService } from './../auth-admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService,
    public adminAuth: AdminAuthService,
     private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login'], {queryParams: {loggedOut: 'success'}});
  }

  adminLogout(): void {
    this.adminAuth.logout();
    this.router.navigate(['/auth-admin/login'], {queryParams: {loggedOut: 'success'}});
  }
}
