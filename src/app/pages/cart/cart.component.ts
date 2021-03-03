import { Component, OnInit } from '@angular/core';
import { OrderedProduct } from '../../models/orderedProduct';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/order';
import { OrderUser } from '../../models/orderUser';
import { LoginserviceService } from '../../services/loginservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public imgShoeUrl = '../../../assets/img/products/shoes/';
  public imgShirtUrl = '../../../assets/img/products/tshirts/';
  public imgSweaterUrl = '../../../assets/img/products/sweaters/';

  public userIsLogged = false;
  public orderSuccess = false;
  public userData = new OrderUser('', '', '', '', '');
  public cartContent!: Array<OrderedProduct>;
  public total = 0;
  public order = new Order(
    this.cartContent,
    this.userData,
    '',
    '',
    '',
    this.total,
    '',
    false
  );
  public cartEmpty = false;
  public changedTotalPrice = false;

  constructor(
    private _cart: CartService,
    private _login: LoginserviceService
  ) {}

  loggedUser() {
    if (this._login.loggedIn()) {
      this.userIsLogged = true;
      this._cart.getUserDataForOrder().subscribe(
        (res) => {
          this.userData.email = res.email;
          this.userData.firstName = res.firstName;
          this.userData.lastName = res.lastName;
          this.userData.address = res.address;
          this.userData.user_id = res.user_id;
        },
        (error) => {
          console.log('error cart-ban: ' + JSON.stringify(error));
        }
      );
    } else {
      this.userIsLogged = false;
    }
  }

  deleteItem(id: string) {
    this.cartContent.forEach((value: any, i: any) => {
      if (value._id === id) {
        if (value.amount != 0) {
          value.amount--;
          if (value.amount === 0) this.cartContent.splice(i, 1);
        }
      }
    });
    this.ngOnInit();
  }
  sendOrder() {
    let order = new Order(
      this.cartContent,
      this.userData,
      this.order.payment,
      this.order.deliveryType,
      this.order.note,
      this.total,
      '',
      false
    );
    this._cart.postOrderFromCart(order).subscribe(
      (res) => {
        this.cartContent.length = 0;
        this.orderSuccess = true;
      },
      (error) => {
        console.log('Error:' + JSON.stringify(error.error));
        this.cartContent.length = 0;
        this.ngOnInit();
      }
    );
  }
  cartIsEmpty() {
    if (this.cartContent.length === 0) {
      this.cartEmpty = true;
    }
  }
  calculateTotalPrice() {
    let price = 0;
    if (this.cartEmpty === false) {
      this.cartContent.forEach((value) => {
        price += value.price * value.amount;
      });
    }
    //home delivery +10$
    if (this.order.deliveryType === 'home_delivery') {
      price += 10;
      this.changedTotalPrice = true;
    }
    this.total = price;
  }
  decreaseTotalPrice() {
    if (this.changedTotalPrice) {
      this.total -= 10;
    }
  }

  ngOnInit(): void {
    this.loggedUser();
    this.cartContent = this._cart.getServiceArray();
    this.cartIsEmpty();
    this.calculateTotalPrice();
  }
}
