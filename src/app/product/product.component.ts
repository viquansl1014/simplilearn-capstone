import { Component, OnInit } from '@angular/core';

import { Product } from '../model/model.product';

import { ProductService } from '../product.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // load product info base on id
  
  //place holder value
  product: Product;
  prodId: string; // default

  constructor(public productService:ProductService,private _Activatedroute:ActivatedRoute) { 
    // get the id param from url
    this._Activatedroute.paramMap.subscribe(params => { 
      this.prodId = params.get('id'); 
    });
  }

  ngOnInit(): void {
    this.productService.getProductById(this.prodId).subscribe(data=>{
      //console.log("Product page with: " + data);
      this.product= new Product(
        data[0]._id,
        data[0].pname,
        data[0].price,
        data[0].description,
        data[0].image,
        ); // return type is always array
    });
  }


}
