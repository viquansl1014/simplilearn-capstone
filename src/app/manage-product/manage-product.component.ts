import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {ProductService} from '../product.service';
import { Product }from '../model/model.product';

import { Company }from '../model/model.company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],

})
export class ManageProductComponent implements OnInit {
  //view control
  listing:boolean= true;
  new_item:boolean= false;
  update_item:boolean= false;

  //data
  products:Product[];
  companies:Company[];

  result:String;

  // formGroup
  productRef = new FormGroup({
    pid:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
    image:new FormControl(),
    company:new FormControl()
  });

  constructor(public productService:ProductService, public companyService:CompanyService) { }

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(data=>this.products=data);
    
    this.companyService.getAllCompanyDetails().subscribe(data=>this.companies=data);
    
  }
  //crud functions
  registerItemtoDb(){
    
    console.log("register item");
    console.log(this.productRef.value);
    this.productService.storeProductDetailsInDb(this.productRef.value).subscribe(data=>this.result=data.msg);
    
  }

  updateItemtoDb(prodId){
    
    console.log("update item");
    console.log(this.productRef.value);
    this.productService.updateProductDetailsInDb(this.productRef.value).subscribe(data=>this.result=data.msg);
    
  }

  //view control functions
  listingView(){
    this.listing= true;
    this.new_item= false;
    this.update_item= false;
  }
  newItem(){
    this.new_item=true;
    this.update_item=false;
    this.listing=false;
  }
  // template to hold the selected product for update
  uProduct: any = { pid: 101, pname: "abc", price: 23, description: "description", image:"link", company: "HP" };
  updateItem(prod){
    console.log(prod);
    console.log(typeof prod);
    // load data to view
    this.uProduct = { pid: prod._id, pname: prod.pname, price: prod.price, description: prod.description, image:prod.image, company: prod.company };
    
    this.update_item=true;
    this.new_item=false;
    this.listing=false;
  }

  deleteItem(prod){
    if( confirm("Are you sure you want to delete this item?")){
      this.productService.deleteProductById(prod._id).subscribe(data=>this.result=data.msg);
      console.log("delete request sent");
    }
    //this.productService.deleteProductById(prod._id);

  }
}
