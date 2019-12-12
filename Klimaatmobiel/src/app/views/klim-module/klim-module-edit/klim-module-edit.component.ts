import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Materiaal } from 'src/app/models/materiaal';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddMateriaalComponent } from '../add-materiaal/add-materiaal.component';
import { KlimModule } from 'src/app/models/klim-module';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-klim-module-edit',
  templateUrl: './klim-module-edit.component.html',
  styleUrls: ['./klim-module-edit.component.css']
})
export class KlimModuleEditComponent implements OnInit {

  public module: KlimModule;

  constructor(
    private _dataService: DataService,
    private _router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.module = item.module
    );
  }

  onSubmit(newModule: KlimModule) {
    this._dataService
      .updateKlimModule(newModule)
      .subscribe(
        val => {
          this.snackBar.open('Module aangepast!', 'Sluit', { duration: 3000 });
          this._router.navigate(['Module/Lijst']);
        },
        (err: HttpErrorResponse) => {
          this.snackBar.open('Er was een probleem bij het opslaan van de module.', 'Sluit', { duration: 15000 });
        }
      );
  }
}
