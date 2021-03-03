import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productUrl = 'https://stockangel.herokuapp.com/api/homeProd';
  public shoeUrl = 'https://stockangel.herokuapp.com/api/shoes';
  public tshirtUrl = 'https://stockangel.herokuapp.com/api/tshirts';
  public sweaterUrl = 'https://stockangel.herokuapp.com/api/sweaters';
  constructor(private _http: HttpClient, private _router: Router) {}
  public inspectedProd!: Product;
  getProducts() {
    return this._http.get<any>(this.productUrl);
  }
  getShoes() {
    return this._http.get<any>(this.shoeUrl);
  }
  gettshirts() {
    return this._http.get<any>(this.tshirtUrl);
  }
  getSweaters() {
    return this._http.get<any>(this.sweaterUrl);
  }
  inspectProduct(product: Product) {
    this.inspectedProd = product;
  }
}
