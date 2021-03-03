import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { OrderedProduct } from '../../models/orderedProduct';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public imgShoeUrl = '../../../assets/img/products/shoes/';
  public imgShirtUrl = '../../../assets/img/products/tshirts/';
  public imgSweaterUrl = '../../../assets/img/products/sweaters/';

  public showProduct!: Product;
  public orderedProdModel!: OrderedProduct;
  //product's maximum amount according to size
  public maxAmount = 1;
  //item added to cart message
  public itemAdded = false;
  constructor(
    private prodService: ProductService,
    private _cart: CartService
  ) {}

  getIndex(item: any, amountValue: any) {
    let passIndex = 0;
    this.showProduct.size.forEach((value: any, i: any) => {
      if (value === item) {
        passIndex = i;
      }
    });
    this.showProduct.amount.forEach((value: any, i: any) => {
      if (passIndex === i) {
        this.maxAmount = value;
      }
    });
    this.amountListener(amountValue);
  }
  amountListener(event: string) {
    let changedVal = parseInt(event);

    if (changedVal > this.maxAmount) {
      this.orderedProdModel.amount = 1;
    }
  }

  addToCart() {
    this._cart.setServiceArray(this.orderedProdModel);
    this.itemAdded = true;
  }

  ngOnInit(): void {
    this.showProduct = this.prodService.inspectedProd;

    this.orderedProdModel = new OrderedProduct(
      this.showProduct._id,
      this.showProduct.brandName,
      this.showProduct.name,
      this.showProduct.type,
      `${this.showProduct.size[0]}`,
      this.showProduct.color,
      this.showProduct.price,
      1,
      this.showProduct.imgUrl,
      this.showProduct.description,
      this.showProduct.newProd,
      this.showProduct.forSale
    );

    this.maxAmount = this.showProduct.amount[0];
  }
}
