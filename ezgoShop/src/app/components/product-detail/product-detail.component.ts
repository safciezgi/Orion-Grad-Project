import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { IProductsService } from 'src/app/services/Iproduct.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, DoCheck {
  user!: any ;
  username!: any;
  email!: any;
  productID!:number;
  products!: Product[];
  selectedProduct!: Product[];
  product!:Product;
  constructor(private route: ActivatedRoute, private productService: IProductsService, private cartService :CartService, private router :Router, private userService :UserService) { }

  ngOnInit(): void {

    this.user = localStorage.getItem('currentUser');
    console.log("this user" + this.user);
    if (typeof this.user === 'string') {
      var parsed = JSON.parse(this.user);
      console.log(parsed); // ok
  }
    console.log(typeof(parsed));
    for (const [key, value] of Object.entries(parsed)) {
      // if(key == 'username'){
      //   var currentUser = value;
      //   console.log(currentUser);
      // }
      switch (key) {
        case 'username':
            this.username = value;
            break;
        case 'email':
          this.email = value;
            break;

    }
    }


    this.route.params.subscribe(params=>{
      this.productID = params['id']
    })

    this.productService.getProducts().subscribe(dataProduct =>{
      this.products = dataProduct;
   });

  }

  ngDoCheck(): void{

    this.selectedProduct = this.products.filter(product=> product.id == this.productID)

  }

  addToCart(){
    this.cartService.addToCart(this.selectedProduct[0]);

  }


}
