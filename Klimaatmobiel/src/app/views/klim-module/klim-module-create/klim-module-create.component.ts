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
  public shop$: Observable<Materiaal[]>;

  public klimModule: FormGroup;
  private materialen: Materiaal[] = [];

  constructor(
    private _fb: FormBuilder,
    private _dataService: DataService,
    private _router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.shop$ = of([]);

    this.klimModule = this._fb.group({
      moduleNaam: ['', [Validators.required]],
      standaardBudget: ['', [Validators.required]],
      duurInMinuten: ['120', [Validators.required]],
      beschrijving: ['']
    });
  }

  addMateriaal() {
    const dialogRef = this.dialog.open(AddMateriaalComponent, {});
    dialogRef.afterClosed().subscribe((result: Materiaal) => {
      if (result) {
        this.shop$.subscribe(
          list => list.push(result)
        );
        this.materialen.push(result);
      }
    });
  }

  deleteEigenschap(materiaal: Materiaal, eigenschap: Eigenschap) {
    materiaal.eigenschappen.splice(materiaal.eigenschappen.indexOf(eigenschap), 1);
  }

  addEigenschap(materiaal: Materiaal) {
    const dialogRef = this.dialog.open(AddEigenschapComponent, {
      data: {mat: materiaal}
    });
    dialogRef.afterClosed().subscribe((result: Eigenschap) => {
      if (result) {
        materiaal.eigenschappen.push(result);
      }
    });
  }

  deleteMateriaal(materiaal: Materiaal) {
    this.shop$.subscribe((lijst) => lijst.splice(lijst.indexOf(materiaal), 1));
  }

  editMateriaal(materiaal: Materiaal) {
    const dialogRef = this.dialog.open(AddMateriaalComponent, {});
    dialogRef.componentInstance.materiaal = materiaal;
    dialogRef.afterClosed().subscribe((result: Materiaal) => {
      if (result) {
        this.shop$.subscribe(list => {
          list[list.indexOf(materiaal)] = result;
        });
        this.materialen[this.materialen.indexOf(materiaal)] = result;
      }
    });  }

  onSubmit() {
    const newModule =  new KlimModule(
      this.klimModule.value.moduleNaam,
      this.klimModule.value.standaardBudget,
      this.klimModule.value.duurInMinuten,
      this.klimModule.value.beschrijving,
      this.materialen);

    this._dataService
      .postModule(newModule)
      .subscribe(
        val => {
          if (val) {
            this._router.navigate(['Module/Lijst']);
            this.snackBar.open('Module aangemaakt!', 'Sluit', {duration: 3000});
          }
        },
        (err: HttpErrorResponse) => {
          this.snackBar.open('Er was een probleem bij het opslaan van de module.', 'Sluit', {duration: 15000});
        }
      );
  }
}
