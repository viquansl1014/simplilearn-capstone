import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//routing module
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard} from '../auth/auth.guard';
import { AuthGuardAdmin } from '../auth-admin/auth.guard';
// main components
import {HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';
//manage component
import {ManageProductComponent} from '../manage-product/manage-product.component';
import {ManageCompanyComponent} from '../manage-company/manage-company.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'product/:id', component: ProductComponent},
  
  { path: 'manage-product', component: ManageProductComponent, canActivate: [AuthGuardAdmin]},
  { path: 'manage-company', component: ManageCompanyComponent, canActivate: [AuthGuardAdmin]},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
