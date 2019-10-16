import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  get scholen$(): Observable<School[]> {
    return this.http.get(`${environment.apiUrl}/School/get_all`).pipe(
      map((list: any[]): School[] => list.map(School.fromJSON)),
      share()
    );
  }

  registerUser(email: string, firstName: string, lastName: string, school: number, password: string, confirmPassword: string): any {
    return this.http.post(
      `${environment.apiUrl}/Account/register`,
      { firstName, lastName, passwordConfirmation: confirmPassword, schoolId: school, email, password },
      { responseType: 'text' }
    );
  }

  loginUser(email: string, password: string): any {
    return this.http.post(
      `${environment.apiUrl}/login`,
      { email, password },
      { responseType: 'text' }
    );
  }
}
