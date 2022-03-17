import { Component, OnInit } from '@angular/core';
import { IProductsService } from 'src/app/services/Iproduct.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products: any;
  constructor(private productService: IProductsService) { }
    
  ngOnInit(): any {
     this.productService.getProducts().subscribe(dataProduct =>{
        console.log(dataProduct);
        this.products = dataProduct;
     });
  }

}
