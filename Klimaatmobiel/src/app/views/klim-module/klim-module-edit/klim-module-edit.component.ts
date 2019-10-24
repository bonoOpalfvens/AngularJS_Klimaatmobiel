import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Materiaal } from 'src/app/models/materiaal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  public shop$: Observable<Materiaal[]>;

  public klimModule: FormGroup;
  private materialen: Materiaal[] = [];

  constructor(
    private _fb: FormBuilder,
    private _dataService: DataService,
    private _router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.module = item.module
    );
    this.materialen = this.module.materialen;
    this.shop$ = of(this.module.materialen);

    this.klimModule = this._fb.group({
      moduleNaam: [this.module.moduleNaam, [Validators.required]],
      standaardBudget: [this.module.standaardBudget, [Validators.required]],
      duurInMinuten: [this.module.duurInMinuten, [Validators.required]],
      beschrijving: this.module.beschrijving
    });
  }

  addMateriaal() {
    const dialogRef = this.dialog.open(AddMateriaalComponent, {});
    dialogRef.afterClosed().subscribe((result: Materiaal) => {
      if (result) {
        this.materialen.push(result);
      }
    });
  }

  deleteModule() {
    const confirmation = confirm('Ben je zeker dat je deze module wilt verwijderen?');
    if (confirmation) {
      this._dataService.deleteKlimModule(this.module.id).subscribe(
        val => {
          if (val) {
            this.snackBar.open('Module succesvol verwijderd!', 'Sluit', {duration: 3000});
            this._router.navigateByUrl('/Module/Lijst');
          }
        }
      );
    }
  }

  deleteMateriaal(materiaal: Materiaal) {
    this.shop$.subscribe((lijst) => lijst.splice(lijst.indexOf(materiaal), 1));
  }

  editMateriaal(materiaal: Materiaal) {
    const dialogRef = this.dialog.open(AddMateriaalComponent, {});
    dialogRef.componentInstance.materiaal = materiaal;
    dialogRef.afterClosed().subscribe((result: Materiaal) => {
      if (result) {
        this.materialen[this.materialen.indexOf(materiaal)] = result;
      }
    });
  }

  onSubmit() {
    this.module.moduleNaam = this.klimModule.value.moduleNaam;
    this.module.standaardBudget = this.klimModule.value.standaardBudget;
    this.module.duurInMinuten = this.klimModule.value.duurInMinuten;
    this.module.beschrijving = this.klimModule.value.beschrijving;
    this.module.materialen = this.materialen;

    this._dataService
      .updateKlimModule(this.module)
      .subscribe(
        val => {
          if (val) {
            this.snackBar.open('Module aangepast!', 'Sluit', {duration: 3000});
          }
        },
        (err: HttpErrorResponse) => {
          this.snackBar.open('Er was een probleem bij het opslaan van de module.', 'Sluit', {duration: 15000});
        }
      );
  }
}
