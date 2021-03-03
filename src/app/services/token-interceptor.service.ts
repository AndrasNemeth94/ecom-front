import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginserviceService } from '../services/loginservice.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: any, next: any) {
    let loginServ = this.injector.get(LoginserviceService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${loginServ.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
