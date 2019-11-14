import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any;

  constructor(private service: ProductService) {
  }

  ngOnInit() {
    // debugger
    this.service.getProduct().subscribe(Response => {
      this.productList = Response;
      console.log(this.productList, ' this.productList');
    });
  }

  deleted(event) {
    this.service.getProduct().subscribe(Response => {
      this.productList = Response;
      console.log(this.productList, ' this.productList');
    });
  }
}
