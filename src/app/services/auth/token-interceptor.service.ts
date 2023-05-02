import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {



  constructor(
    public authService: AuthService
  ) {}

  intercept(req:any, next:any){
    const tokenizeReq = req.clone({
      setHeaders:{
        Auhthorization: 'Bearer ${this.authService.getToken()}'
      }
    })
    return next.handle(tokenizeReq)
  }
}
