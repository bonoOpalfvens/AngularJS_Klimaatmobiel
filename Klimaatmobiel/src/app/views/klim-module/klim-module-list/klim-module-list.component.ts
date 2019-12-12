import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { KlimModule } from 'src/app/models/klim-module';
import { DataService } from 'src/app/services/data.service';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-klim-module-list',
  templateUrl: './klim-module-list.component.html',
  styleUrls: ['./klim-module-list.component.css']
})
export class KlimModuleListComponent implements OnInit {
  public fetchKlimModules$: Observable<KlimModule[]> = this._dataService.klimModules$;
  public filterModule: string;
  public filterModule$ = new Subject<string>();
  public klimModules: KlimModule[];

  constructor(
    private _dataService: DataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.filterModule$.pipe(
      distinctUntilChanged(),
      debounceTime(50),
      map(val => val.toLowerCase())
    ).subscribe(val => this.filterModule = val);

    this.fetchKlimModules$.subscribe(m => this.klimModules = m);
  }

  applyFilter(filter: string) {
    this.filterModule = filter;
  }

  get deleteModuleFunc() {
    return this.deleteModule.bind(this);
  }

  deleteModule(mod: KlimModule) {
    this._dataService.deleteKlimModule(mod.id).subscribe(
      val => {
        if (val) {
          this.snackBar.open('Module succesvol verwijderd.', 'Sluit', {duration: 3000});
          this.fetchKlimModules$ = this._dataService.klimModules$;
        }
      },
      (err: HttpErrorResponse) => {
        this.snackBar.open('Module kon niet verwijderd worden.', 'Sluit', {duration: 3000});
      }
    );
  }
}
