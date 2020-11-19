import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

import { AdminAuthService } from './auth.service';
import { AuthGuardAdmin } from './auth.guard';

const routes: Routes = [
  {
    path: 'auth-admin',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent,  },// canActivate: [AuthGuardAdmin]
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [AdminAuthService, AuthGuardAdmin]
})
export class AdminAuthModule { }
