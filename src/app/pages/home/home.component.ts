import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  template: `<div class="page-container">
    <div class="loop" *ngFor="let s of prodArray; index as i">
      <app-product [item]="s"> </app-product>
    </div>
  </div>`,
  styleUrls: ['../productPageStyle/style.css'],
})
export class HomeComponent implements OnInit {
  constructor(private prodService: ProductService) {}
  public prodArray!: [];

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(
      (res) => {
        this.prodArray = res;
      },
      (err) => {
        throw err;
      }
    );
  }
}
