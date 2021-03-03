import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public productUrl = 'http://localhost:3000/api/homeProd';
  public shoeUrl = 'http://localhost:3000/api/shoes';
  public tshirtUrl = 'http://localhost:3000/api/tshirts';
  public sweaterUrl = 'http://localhost:3000/api/sweaters';
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
