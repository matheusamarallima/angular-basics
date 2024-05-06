import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAll(){
    return this.httpClient.get<Product[]>("/api/products");
  }

  post(payload: any){
    return this.httpClient.post("/api/products", payload);

  }

  constructor() { }
}
