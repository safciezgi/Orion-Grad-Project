import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { IProductsService } from 'src/app/services/Iproduct.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, DoCheck {

  productID!:number;
  products!: Product[];
  selectedProduct!: Product[];
  constructor(private route: ActivatedRoute, private productService: IProductsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.productID = params['id']
    })
     
    this.productService.getProducts().subscribe(dataProduct =>{
      this.products = dataProduct;
   });

  }

  ngDoCheck(): void{

    this.selectedProduct = this.products.filter(product=> product.id == this.productID)
    console.log(this.selectedProduct);
  }


}
