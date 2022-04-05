import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { IProductsService } from 'src/app/services/Iproduct.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories: Array<string> = ['All Products','Batman','Harry Potter','Marvel','Super Mario','Star Wars',];
  products!: Product[];
  filteredProducts: any;
  displayMode: number = 1;
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
  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

}
