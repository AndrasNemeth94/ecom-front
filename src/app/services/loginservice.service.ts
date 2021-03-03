import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { userSignUp } from '../models/userSignUp';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  private _urlLogin = 'https://stockangel.herokuapp.com/api/login';
  private _urlProfile = 'https://stockangel.herokuapp.com/api/profile';
  private _urlSignup = 'https://stockangel.herokuapp.com/api/signup';
  private _urlDataChange = 'https://stockangel.herokuapp.com/api/datachange';
  constructor(public _http: HttpClient, private _router: Router) {}

  signUp(user: userSignUp) {
    return this._http.post<any>(this._urlSignup, user);
  }
  login(user: User) {
    return this._http.post<any>(this._urlLogin, user);
  }
  loggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

  getProfile() {
    return this._http.get<any>(this._urlProfile);
  }
  changeUserData(userModel: any) {
    return this._http.post<any>(this._urlDataChange, userModel);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
}
