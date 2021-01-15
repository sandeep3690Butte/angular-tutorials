import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any = this.cartService.getCart();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("your order submitted succesfully", this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
