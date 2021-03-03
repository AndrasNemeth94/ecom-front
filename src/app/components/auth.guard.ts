import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _loginservice: LoginserviceService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (this._loginservice.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
