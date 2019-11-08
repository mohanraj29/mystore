import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../modal/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  productArr: Array <ProductDetail> = [
    {
    name: 'mi Note 8 Pro ',
    image: 'https://rukminim1.flixcart.com/image/312/312/k12go7k0/mobile/8/e/b/mi-redmi-8a-mzb8298in-original-imafkmhqztfbabww.jpeg?q=70',
    description: 'Redmi 8 (Onyx Black, 6GB RAM, 64GB Storage).',
    imageAlt: 'mi note 8 pro',
    isAvailable: true,
    price: 14999.00,
  },
  {
    name: 'mi Note 8 ',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/312/312/jyxaw7k0/mobile/4/k/h/mi-redmi-note-7s-mzb7745in-original-imafe48ru3s66sjd.jpeg?q=70',
    description: 'Redmi Note 8 (Neptune Blue, 4GB RAM, 64GB Storage).',
    imageAlt: 'mi note 8',
    isAvailable: true,
    price: 9999.00,
  },
  {
    name: 'sumsung m30 ',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/312/312/jtg44nk0/mobile/y/h/3/samsung-galaxy-m30-sm-m305fzbgins-original-imafehsh6rfbxujy.jpeg?q=70',
    description: 'Samsung Galaxy M30 (Stainless Black, 5000mAh Battery, Super AMOLED Display, 3GB RAM, 32GB Storage)',
    imageAlt: 'Samsung Galaxy M30',
    isAvailable: true,
    price: 9999.00,
  },
  {
    name: 'mi Note 8 Pro ',
    image: 'https://rukminim1.flixcart.com/image/312/312/k12go7k0/mobile/8/e/b/mi-redmi-8a-mzb8298in-original-imafkmhqztfbabww.jpeg?q=70',
    description: 'Redmi 8 (Onyx Black, 6GB RAM, 64GB Storage).',
    imageAlt: 'mi note 8 pro',
    isAvailable: true,
    price: 14999.00,
  },
  {
    name: 'mi Note 8 ',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/312/312/jyxaw7k0/mobile/4/k/h/mi-redmi-note-7s-mzb7745in-original-imafe48ru3s66sjd.jpeg?q=70',
    description: 'Redmi Note 8 (Neptune Blue, 4GB RAM, 64GB Storage).',
    imageAlt: 'mi note 8',
    isAvailable: false,
    price: 9999.00,
  },
  {
    name: 'sumsung m30 ',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/312/312/jtg44nk0/mobile/y/h/3/samsung-galaxy-m30-sm-m305fzbgins-original-imafehsh6rfbxujy.jpeg?q=70',
    description: 'Samsung Galaxy M30 (Stainless Black, 5000mAh Battery, Super AMOLED Display, 3GB RAM, 32GB Storage)',
    imageAlt: 'Samsung Galaxy M30',
    isAvailable: true,
    price: 9999.00,
  },{
    name: 'mi Note 8 Pro ',
    image: 'https://rukminim1.flixcart.com/image/312/312/k12go7k0/mobile/8/e/b/mi-redmi-8a-mzb8298in-original-imafkmhqztfbabww.jpeg?q=70',
    description: 'Redmi 8 (Onyx Black, 6GB RAM, 64GB Storage).',
    imageAlt: 'mi note 8 pro',
    isAvailable: true,
    price: 14999.00,
  },
  {
    name: 'mi Note 8 ',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/312/312/jyxaw7k0/mobile/4/k/h/mi-redmi-note-7s-mzb7745in-original-imafe48ru3s66sjd.jpeg?q=70',
    description: 'Redmi Note 8 (Neptune Blue, 4GB RAM, 64GB Storage).',
    imageAlt: 'mi note 8',
    isAvailable: true,
    price: 9999.00,
  },
  {
    name: 'sumsung m30 ',
    // tslint:disable-next-line: max-line-length
    image: 'https://rukminim1.flixcart.com/image/312/312/jtg44nk0/mobile/y/h/3/samsung-galaxy-m30-sm-m305fzbgins-original-imafehsh6rfbxujy.jpeg?q=70',
    description: 'Samsung Galaxy M30 (Stainless Black, 5000mAh Battery, Super AMOLED Display, 3GB RAM, 32GB Storage)',
    imageAlt: 'Samsung Galaxy M30',
    isAvailable: false,
    price: 9999.00,
  },

] ;

  ngOnInit() {
  }
}
