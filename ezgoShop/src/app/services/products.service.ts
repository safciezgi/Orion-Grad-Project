import { Injectable } from '@angular/core';
import { IProductsService } from './Iproduct.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService implements IProductsService {

  constructor(protected http: HttpClient) { 
  }

  getProducts(){
    return this.http.get<any>("https://lego-api-project.herokuapp.com/products");
  }
}
