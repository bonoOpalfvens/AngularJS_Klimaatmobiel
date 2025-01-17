import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorisationService } from '../services/authorisation.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthorisationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.token.length) {
      const clonedRequest = req.clone({
        headers: req.headers.set(
          'Authorization',
          `Bearer ${this.authService.token.substr(1, this.authService.token.length - 2)}`
        )
      });
      console.log(clonedRequest);
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}