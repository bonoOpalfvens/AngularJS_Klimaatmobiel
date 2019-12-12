import { Component, OnInit, Input } from '@angular/core';
import { KlimModule } from 'src/app/models/klim-module';
import { DataService } from 'src/app/services/data.service';
import { ModuleInstance } from 'src/app/models/module-instance';

import { MatDialog, MatSnackBar } from '@angular/material';
import { ModuleInstanceCreateDialogComponent } from '../module-instance-create-dialog/module-instance-create-dialog.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-klim-module-view',
  templateUrl: './klim-module-view.component.html',
  styleUrls: ['./klim-module-view.component.css']
})
export class KlimModuleViewComponent implements OnInit {
  @Input() public klimModule: KlimModule;
  // tslint:disable-next-line: ban-types
  @Input() deleteFunc: Function;

  constructor(
    private _dataService: DataService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) { }
  ngOnInit() {}

  startModule(klimModule: KlimModule) {
    const dialogRef = this._dialog.open(ModuleInstanceCreateDialogComponent, {});
    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        const moduleInstance = new ModuleInstance(klimModule, result);
        this._dataService.postModuleInstance(moduleInstance)
          .subscribe(
            val => {
              if (val) {
                this._router.navigate(['ModuleInstance/Dashboard/'.concat(JSON.parse(val).moduleInstanceId)]);
                this._snackBar.open('Module gestart!', 'Sluit', {duration: 3000});
              }
            },
            (err: HttpErrorResponse) => {
              this._snackBar.open('Er was een probleem bij het starten van de module.', 'Sluit', {duration: 15000});
            }
          );
      }
    });
  }
}
