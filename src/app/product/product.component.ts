import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.getAllProducts().subscribe({
      next: (data) => {
        console.log({ data });
      },
    });
  }
}
