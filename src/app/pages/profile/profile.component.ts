import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';
import { userSignUp } from '../../models/userSignUp';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderUser } from 'src/app/models/orderUser';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public login_service: LoginserviceService,
    private _router: Router
  ) {}
  public orders!: Array<Order>;
  public userDetails!: OrderUser;
  public profileDetail!: userSignUp;
  public isDisabled = true;
  public cardDisplay = false;

  getUserDetails(user: any) {
    this.profileDetail.email = user.email;
    this.profileDetail.firstName = user.firstName;
    this.profileDetail.lastName = user.lastName;
    this.profileDetail.address = user.address;
  }
  disableForm() {
    this.isDisabled = !this.isDisabled;
    return;
  }
  sendChange() {
    console.log('SEND: ' + this.profileDetail);
    this.login_service.changeUserData(this.profileDetail).subscribe(
      (res) => {
        console.log('Res: ' + JSON.stringify(res));
        this.ngOnInit();
      },
      (err) => {
        throw err;
      }
    );
  }
  showOrders() {
    this.cardDisplay = !this.cardDisplay;
  }

  ngOnInit(): void {
    this.login_service.getProfile().subscribe(
      (res) => {
        this.userDetails = res[0];
        this.orders = res[1];

        this.profileDetail = new userSignUp(
          this.userDetails.email,
          '*',
          this.userDetails.firstName,
          this.userDetails.lastName,
          this.userDetails.address
        );
        this.getUserDetails(res[0]);
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
