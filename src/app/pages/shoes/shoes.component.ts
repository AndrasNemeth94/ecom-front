import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shoes',
  template: `<div class="page-container">
    <div class="loop" *ngFor="let s of shoeArray; index as i">
      <app-product [item]="s"> </app-product>
    </div>
  </div>`,
  styleUrls: ['../productPageStyle/style.css'],
})
export class ShoesComponent implements OnInit {
  public shoeArray!: [];
  constructor(private shoeService: ProductService) {}

  ngOnInit(): void {
    this.shoeService.getShoes().subscribe(
      (res) => {
        this.shoeArray = res;
      },
      (error) => {
        throw error;
      }
    );
  }
}
