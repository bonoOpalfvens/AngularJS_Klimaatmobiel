import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { KlimModule } from 'src/app/models/klim-module';
import { Materiaal } from 'src/app/models/materiaal';
import { AddMateriaalComponent } from '../add-materiaal/add-materiaal.component';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Eigenschap } from 'src/app/models/eigenschap';
import { AddEigenschapComponent } from '../add-eigenschap/add-eigenschap.component';

@Component({
  selector: 'app-klim-module-create',
  templateUrl: './klim-module-create.component.html',
  styleUrls: ['./klim-module-create.component.css']
})

export class KlimModuleCreateComponent implements OnInit {

  public module: KlimModule;

  constructor(
    private _router: Router,
    private snackBar: MatSnackBar,
    private _dataService: DataService,
  ) { }

  ngOnInit() {
    this.module = new KlimModule(undefined, undefined, undefined, undefined, []);
  }

  onSubmit(newModule: KlimModule) {
    this._dataService
      .postModule(newModule)
      .subscribe(
        val => {
          if (val) {
            this._router.navigate(['Module/Lijst']);
            this.snackBar.open('Module aangemaakt!', 'Sluit', { duration: 3000 });
          }
        },
        (err: HttpErrorResponse) => {
          this.snackBar.open('Er was een probleem bij het opslaan van de module.', 'Sluit', { duration: 15000 });
        }
      );
  }
}
