import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userModel = new User('', '');
  public showError = false;
  public ErrorMessage = '';
  constructor(
    private login_service: LoginserviceService,
    private _router: Router
  ) {}
  logIn() {
    this.login_service.login(this.userModel).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/profile']);
      },
      (error) => {
        this.ErrorMessage = error.error;
        this.showError = true;
      }
    );
  }

  ngOnInit(): void {}
}
