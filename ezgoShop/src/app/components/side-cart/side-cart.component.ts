import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.scss']
})
export class SideCartComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService :CartService, private router :Router) {
    this.setCart();
   }

  removeFromCart(cartItem :CartItem){
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
    this.router.navigateByUrl('/cartPage')
  }

  changeQuantity(cartItem :CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  ngOnInit(): void {
  }

}
