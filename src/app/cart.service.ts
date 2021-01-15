import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  constructor() { }

  getCart = () => this.items;

  addToCart(product: any){
    this.items.push(product);
  };

  clearCart = () => {
    this.items = [];
    return this.items;
  }
}
