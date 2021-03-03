import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-tshirts',
  template: `<div class="page-container">
    <div class="loop" *ngFor="let s of tshirtArray; index as i">
      <app-product [item]="s"> </app-product>
    </div>
  </div>`,
  styleUrls: ['../productPageStyle/style.css'],
})
export class TshirtsComponent implements OnInit {
  public tshirtArray!: [];
  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    this.prodService.gettshirts().subscribe(
      (res) => {
        this.tshirtArray = res;
      },
      (err) => {
        throw err;
      }
    );
  }
}
