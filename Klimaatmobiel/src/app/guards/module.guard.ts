import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { KlimModule } from '../models/klim-module';
import { catchError } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleGuard implements Resolve<KlimModule> {
  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KlimModule> {
    return this.dataService.getKlimModule$(route.params.id).pipe(
      catchError(err => {
        this.router.navigate(['Module/Lijst']);
        return EMPTY;
      })
    );
  }
}
