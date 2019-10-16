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
}
