import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../service/product.service';



@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})

export class ProductdetailComponent implements OnInit {
  @Input() product;
  @Output() isDeleted = new EventEmitter();
  productLiked = 0;
  constructor(private service: ProductService) {
  }
  ngOnInit() {
  }
  delete(id) {
    this.service.del(id).subscribe(data => {
      alert('product deleted successfully');
      this.isDeleted.emit("");
    });
  }
  cart() {
    this.productLiked += 1;
  }
}

