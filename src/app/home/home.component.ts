import { Component, OnInit } from '@angular/core';

import { Product }from '../model/model.product';
import { Company } from '../model/model.company';

import { FormControl, FormGroup } from '@angular/forms';

import {ProductService} from '../product.service';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  // load product info into a menu 



  products: Product[];
  companies: Company[];
  constructor(public productService:ProductService, public companyService:CompanyService  ) {}

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(data=>{
      this.products=data;
    });

    this.companyService.getAllCompanyDetails().subscribe(data=>{
      this.companies=data
    });
    // fill filter option with companies name


  }
    // filter formGroup
    filterRef = new FormGroup({
      cname:new FormControl(),
      gender:new FormControl(),
    });

  filter():void{
      // get parameters
      console.log("filter item");
      console.log(this.filterRef.value);


  }
}
