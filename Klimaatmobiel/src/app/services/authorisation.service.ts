import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  // tslint:disable: variable-name
  private readonly tokenKey = 'currentUser';
  private readonly emailKey = 'email';
  private _user$: BehaviorSubject<string>;

  constructor(private dataService: DataService) {
    let parsedToken = parseJwt(localStorage.getItem(this.tokenKey));
    if (parsedToken) {
      const expires =
        new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.emailKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(
      localStorage.getItem(this.emailKey)
    );
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this.tokenKey);
    return !!localToken ? localToken : '';
  }

  register(
    email: string,
    firstName: string,
    lastName: string,
    school: number,
    password: string,
    confirmPassword: string
  ): Observable<boolean> {
    return this.dataService.registerUser(email, firstName, lastName, school, password, confirmPassword).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this.tokenKey, token);
          localStorage.setItem(this.emailKey, email);
          this._user$.next(email);
          return true;
        }
        return false;
      })
    );
  }

  change(email: string,
    firstName: string,
    lastName: string,
    school: number,
    password: string,
    confirmPassword: string
    ): Observable<boolean> {
      return this.dataService.changeUser(email, firstName, lastName, school, password, confirmPassword).pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this.tokenKey, token);
            localStorage.setItem(this.emailKey, email);
            this._user$.next(email);
            return true;
          }
          return false;
        })
      );
    }

  login(email: string, password: string): Observable<boolean> {
    return this.dataService.loginUser(email, password).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this.tokenKey, token);
          localStorage.setItem(this.emailKey, email);
          this.user$.next(email);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.emailKey);
      this.user$.next(null);
    }
  }
}

function parseJwt(token) {
  if (!token) { return null; }

  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
