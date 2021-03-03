import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sweaters',
  template: `<div class="page-container">
    <div class="loop" *ngFor="let s of sweaterArray; index as i">
      <app-product [item]="s"> </app-product>
    </div>
  </div>`,
  styleUrls: ['../productPageStyle/style.css'],
})
export class SweatersComponent implements OnInit {
  public sweaterArray!: [];
  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    this.prodService.getSweaters().subscribe(
      (res) => {
        this.sweaterArray = res;
      },
      (err) => {
        throw err;
      }
    );
  }
}
