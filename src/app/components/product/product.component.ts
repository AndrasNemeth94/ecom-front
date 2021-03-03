import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() item!: any;

  constructor(private prodService: ProductService, private _router: Router) {}
  public imgShoeUrl = '../../../assets/img/products/shoes/';
  public imgShirtUrl = '../../../assets/img/products/tshirts/';
  public imgSweaterUrl = '../../../assets/img/products/sweaters/';

  navToProductDetails() {
    this.prodService.inspectProduct(this.item);
    this._router.navigate([`/product_details/${this.item._id}`]);
  }
  ngOnInit(): void {}
}
