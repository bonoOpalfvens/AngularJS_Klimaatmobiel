import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { School } from '../models/school';
import { KlimModule } from '../models/klim-module';
import { Materiaal } from '../models/materiaal';
import { ModuleInstance } from '../models/module-instance';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  postModule(klimModule: KlimModule): any {
    return this.http.post(`${environment.apiUrl}/Module/`, klimModule.toJSON(),  { responseType: 'text' })
      .pipe();
  }

  postModuleInstance(moduleInstance: ModuleInstance): any {
    console.log("post")
    return this.http.post(`${environment.apiUrl}/ModuleInstance/`, moduleInstance.toJSON(),  { responseType: 'text' })
      .pipe();
  }

  deleteKlimModule(id: number) {
    return this.http
      .delete(`${environment.apiUrl}/Module/${id}`)
      .pipe();
  }

  updateKlimModule(klimModule: KlimModule) {
    return this.http
      .put(`${environment.apiUrl}/Module/${klimModule.id}`, klimModule.toJSON());
  }

  getKlimModule$(id: number): Observable<KlimModule> {
    return this.http
      .get(`${environment.apiUrl}/Module/${id}`)
      .pipe(map((klim: any): KlimModule => KlimModule.fromJSON(klim)));
  }

  get materialen$(): Observable<Materiaal[]> {
    return this.http.get(`${environment.apiUrl}/Materiaal/get_all`).pipe(
      map((list: any[]): Materiaal[] => list.map(Materiaal.fromJSON)),
      share()
    );
  }

  get klimModules$(): Observable<KlimModule[]> {
    return this.http.get(`${environment.apiUrl}/Module/get_all`).pipe(
      map((list: any[]): KlimModule[] => list.map(KlimModule.fromJSON)),
      share()
    );
  }

  get moduleInstances$(): Observable<ModuleInstance[]> {
    return this.http.get(`${environment.apiUrl}/ModuleInstance/get_all`).pipe(
      map((list: any[]): ModuleInstance[] => list.map(ModuleInstance.fromJSON)),
      share()
    );
  }

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
      `${environment.apiUrl}/Account/login`,
      { email, password },
      { responseType: 'text' }
    );
  }
}
