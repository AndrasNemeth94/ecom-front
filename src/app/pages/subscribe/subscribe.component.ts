import { Component, OnInit } from '@angular/core';
import { userSignUp } from '../../models/userSignUp';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent implements OnInit {
  public signUp = new userSignUp('', '', '', '', '');
  constructor(
    private _loginservice: LoginserviceService,
    private _router: Router
  ) {}

  sendSignUp() {
    this._loginservice.signUp(this.signUp).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/profile']);
      },
      (err) => {
        throw err;
      }
    );
  }
  ngOnInit(): void {}
}
