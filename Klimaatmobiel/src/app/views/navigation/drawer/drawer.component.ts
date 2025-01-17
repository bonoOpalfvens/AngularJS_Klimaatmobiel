import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AuthorisationService } from 'src/app/services/authorisation.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  public isExpanded = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthorisationService
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
  }
}
