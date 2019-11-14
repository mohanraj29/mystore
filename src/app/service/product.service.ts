import { Injectable } from '@angular/core';
import { ProductDetail } from '../modal/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  actionUrl: string = environment.baseUrltest;




  constructor(private http: HttpClient) {


  }
  getProduct() {
    return this.http.get(this.actionUrl + '/product');
  }

  addProduct(product: ProductDetail) {
    return this.http.post(this.actionUrl + '/product', product);
  }

  filterProduct(id: any) {
    return this.http.get(this.actionUrl + '/product/' + id);
  }

  update(formData: any, id: any) {
    return this.http.put(this.actionUrl + '/product/' + id, formData);
  }
  del(id: any) {
    return this.http.delete(this.actionUrl + '/product/' + id);
  }
}








