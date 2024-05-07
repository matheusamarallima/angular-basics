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

  get(id:string){
    return this.httpClient.get<Product>(`/api/products/${id}`)
  }

  post(payload: any){
    return this.httpClient.post('/api/products', payload);

  }

  put(id: string, payload: any){
    return this.httpClient.put(`/api/products/${id}`, payload);
  }

  constructor() { }
}
