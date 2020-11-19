import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthModule } from './auth/auth.module'; 
//modified admin auth module
import { AdminAuthModule } from './auth-admin/auth.module'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ManageProductComponent,
    ProductComponent,
    CompanyComponent,
    ManageCompanyComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminAuthModule,
    FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
            HeaderComponent,
            HomeComponent,
            ManageProductComponent,
            ProductComponent,
            CompanyComponent,
            ManageCompanyComponent,
            CartComponent
  ]
})
export class AppModule { }
