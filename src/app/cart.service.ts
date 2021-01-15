import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  constructor(private http: HttpClient) { }

  getCart = () => this.items;

  addToCart(product: any) {
    this.items.push(product);
  };

  clearCart = () => {
    this.items = [];
    return this.items;
  };

  getShippingPrices() {
    return this.http.get("../assets/shipping.json");
  }
}
