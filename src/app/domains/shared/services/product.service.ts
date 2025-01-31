import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = `http://localhost:3000/api`;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

}
