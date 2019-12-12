import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { ModuleInstance } from '../models/module-instance';
import { DataService } from '../services/data.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuleInstanceGuard implements Resolve<ModuleInstance>{

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ModuleInstance> {
    console.log("resolve")
    return this.dataService.getModuleInstance$(route.params.id).pipe(
      catchError(err => {
        this.router.navigate(['Module/Lijst']);
        return EMPTY;
      })
    );
  }

}
