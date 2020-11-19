import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { AdminAuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

//this one is dedicated for admin portal.
// will be shaved down to use hard coded username and password
// username: admin; password : password
export class AuthGuardAdmin implements CanActivate {
  private url: string;
  
   
  constructor(private auth: AdminAuthService, private router: Router) { }

  private authState(): boolean {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  private notAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      return true;
    }
    this.router.navigate(['./auth-admin/login']);
    return false;
  }

  private isLoginOrRegister(): boolean {
    if (this.url.includes('./auth-admin/login') || this.url.includes('/auth/register')) {
      return true;
    }
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    this.url = state.url;
    if (this.auth.isAuthenticated()) {
     return this.authState();
    }
    return this.notAuthState();
  }
}

