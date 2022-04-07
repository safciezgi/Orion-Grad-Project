import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
public orderSave!: any; 
  constructor(private cartService :CartService, private router :Router, private http :HttpClient) {
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
    console.log(this.cart.items);
    // const orderSave = {
    //   title: [''],
    //   totalPrice: ''
    // };
    // orderSave.totalPrice = (this.cart.totalPrice as any);
    // this.cart.items[0].product.title; //order json log
  }
  proceedToPay(){

    // this.http.post<any>("http://localhost:3000/Orders", this.orderSave.value).subscribe(res=>{
    //   alert('successfull');
    // },err=>{
    //   alert('Something went wrong!');
    // })
    alert("Pay is proceed!")
}
  

  ngOnInit(): void {
    
  }

}