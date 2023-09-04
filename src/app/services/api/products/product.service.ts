import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProducts(limit: number = 10) {
    return this.http.get<Array<Product>>(
      `${this.baseUrl}products?limit=${limit}`
    );
  }
}
