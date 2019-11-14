
import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm: FormGroup;
  addList;
  sub: any;
  id: number;
  current: any;
  data: any;
  constructor(private service: ProductService, private route: ActivatedRoute, private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.maxLength(20), Validators.minLength(5)]),
      imageUrl: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(500)),
      isAvailable: new FormControl(false, Validators.required),
      price: new FormControl('', Validators.required),
      createdAt: new FormControl('', Validators.required),
      updatedAt: new FormControl('', Validators.required),
    });
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
      console.log(this.id);
      this.current = this.service.filterProduct(this.id).subscribe(Response => {
        this.data = Response;
        console.log('response', this.data);
        
        this.myForm.patchValue({
          id: this.data.id,
          createdAt: this.data.createdAt,
          updatedAt: this.data.updatedAt,
          title: this.data.title,
          description: this.data.description,
          imageUrl: this.data.imageUrl,
          price: this.data.price,
          isAvailable: this.data.isAvailable,


        });
      });
      console.log(this.current);
    });

  }

  onSubmit(form: FormGroup) {
    if (this.id) {
      this.service.update(this.myForm.value, this.id).subscribe(data => {
        alert('product updated successfully');
        this.router.navigate(['']);
      });
    } else {
      this.service.addProduct(this.myForm.value).subscribe(data => {
        alert( 'product added successfully' ); this.router.navigate(['']);
      });
    }

  }

  delete() {
    this.service.del(this.id).subscribe(data => {
      alert('product deleted successfully');
      this.router.navigate(['']);
    });
  }
}
