import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { IProductsService } from 'src/app/services/Iproduct.service';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.scss']
})
export class GridProductComponent implements OnInit {
  categories: Array<string> = ['All Products','Batman','Harry Potter','Marvel','Super Mario','Star Wars',];
  products!: Product[];
  filteredProducts: any;
  constructor(private productService: IProductsService, private route: ActivatedRoute) { }

  ngOnInit(): any {

    this.productService.getProducts().subscribe(dataProduct =>{
      console.log(dataProduct);
      this.products = dataProduct;
      this.filteredProducts = this.products;

   });
   this.route.params.subscribe(params=> {
     if (params['searchTerm']) {
        this.productService.getProducts().subscribe(searchedProduct =>{
          this.filteredProducts = searchedProduct.filter((res:any) => res.title.toLowerCase().includes(params['searchTerm'].toLowerCase()))
        })
     }else{
        this.productService.getProducts().subscribe(dataProduct =>{
          // console.log(dataProduct);
          this.products = dataProduct;
          this.filteredProducts = this.products;
      });
     }
   })
}

categoryChoose(category:string){
  if (category == 'All Products') {
    this.filteredProducts = this.products;
  }else{
    this.filteredProducts = this.products.filter(res=>{
      return category == res.category;
    })
  }
}

}
