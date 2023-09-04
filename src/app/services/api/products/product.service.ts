import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getAllProducts(limit: number = 5) {
    return this.http.get(`${this.baseUrl}products?limit=${limit}`);
  }
}
