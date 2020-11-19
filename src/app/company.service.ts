import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './model/model.company'; 
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(public httpClient:HttpClient) { }

  getAllCompanyDetails():Observable<Company[]>{
    return this.httpClient.get<Company[]>("http://localhost:9090/company/companyFromDb");

  }

  getCompanyById(prodId):Observable<Company>{
      return this.httpClient.get<Company>("http://localhost:9090/company/companyInfoById/"+prodId);
  }

  storeCompanyDetailsInDb(propRef): Observable<any>{
    //this.httpClient.post("http://localhost:9090/company/storeCompany",propRef).subscribe(result=> console.log(result),error=>console.log(error));
    //forward data to the view level
    return this.httpClient.post("http://localhost:9090/company/newCompany",propRef);
 
  }

  deleteCompanyById(prodId):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/company/deleteCompany/"+prodId);
  }

  updateCompanyDetailsInDb(propRef): Observable<any>{

    return this.httpClient.put("http://localhost:9090/company/updateCompany",propRef);
 
  }
}
