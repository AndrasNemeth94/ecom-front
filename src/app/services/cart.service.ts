import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrderedProduct } from '../models/orderedProduct';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private postProdUrl = 'https://stockangel.herokuapp.com/api/order';
  private postToken = 'https://stockangel.herokuapp.com/api/userData';
  public prodToCart = new Array<OrderedProduct>();
  constructor(private _http: HttpClient, private _router: Router) {}

  setServiceArray(item: OrderedProduct) {
    this.prodToCart.push(item);
  }
  getServiceArray(): Array<OrderedProduct> {
    return this.prodToCart;
  }
  getUserDataForOrder() {
    return this._http.get<any>(this.postToken);
  }
  postOrderFromCart(order: Order) {
    return this._http.post<Order>(this.postProdUrl, order);
  }
}
