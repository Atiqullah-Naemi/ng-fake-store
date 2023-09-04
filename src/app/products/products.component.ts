import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { Product } from '../models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
    });
  }
}
