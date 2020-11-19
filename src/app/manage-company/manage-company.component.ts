import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Company }from '../model/model.company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  //view control
  listing:boolean= true;
  new_item:boolean= false;
  update_item:boolean= false;

  //data
  companies:Company[];

  result:String;

  // formGroup
  companyRef = new FormGroup({
    cid:new FormControl(),
    cname:new FormControl(),
  });

  constructor(public companyService:CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllCompanyDetails().subscribe(data=>this.companies=data);
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
  // template to hold the selected company for update
  uProduct: any = { cname: "abc" };
  updateItem(prod){
    console.log(prod);
    // load data to view
    this.uProduct = {
      cid: prod._id, 
      cname: prod.cname 
    };
    
    this.update_item=true;
    this.new_item=false;
    this.listing=false;
  }

  //crud functions
  registerItemtoDb(){
    
    console.log("register item");
    console.log(this.companyRef.value);
    this.companyService.storeCompanyDetailsInDb(this.companyRef.value).subscribe(data=>this.result=data.msg);
    
  }
  updatedCompany: any;
  updateItemtoDb(comp){
    
    console.log("updating item");
    console.log(this.companyRef.value);
    
    this.companyService.updateCompanyDetailsInDb(this.companyRef.value).subscribe(data=>this.result=data.msg);
    
  }


  deleteItem(prod){
    if( confirm("Are you sure you want to delete this item?")){
      this.companyService.deleteCompanyById(prod._id).subscribe(data=>this.result=data.msg);
    }
    
  }

}
