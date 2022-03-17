import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products: any;
  constructor(private productService: ProductsService) { }
    
  ngOnInit(): any {
    // this.productService.getProducts()
  }

}
