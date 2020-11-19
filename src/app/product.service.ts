import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model/model.product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient:HttpClient) { }

  getAllProductDetails():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:9090/product/productFromDb");

  }

  getProductById(prodId):Observable<Product>{
      return this.httpClient.get<Product>("http://localhost:9090/product/productInfoById/"+prodId);
  }

  storeProductDetailsInDb(propRef): Observable<any>{
    //this.httpClient.post("http://localhost:9090/product/storeProduct",propRef).subscribe(result=> console.log(result),error=>console.log(error));
    //forward data to the view level
    return this.httpClient.post("http://localhost:9090/product/storeProduct",propRef);
 
  }

  deleteProductById(prodId):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/product/deleteProduct/"+prodId);
  }

  updateProductDetailsInDb(propRef): Observable<any>{

    return this.httpClient.put("http://localhost:9090/product/updateProduct",propRef);
 
  }
}
