import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { KlimModule } from 'src/app/models/klim-module';
import { Materiaal } from 'src/app/models/materiaal';
import { AddMateriaalComponent } from '../add-materiaal/add-materiaal.component';
import { Observable, of } from 'rxjs';

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
    // tslint:disable: variable-name
    private _fb: FormBuilder,
    private _dataService: DataService,
    private _router: Router,
    public dialog: MatDialog
  ) {

    this.shop$ = of([
      // tslint:disable: max-line-length
      new Materiaal('icoon1', 'Hout', 'Hout is het voornaamste bestanddeel van houtige planten: (vooral) bomen en struiken. Botanisch gezien is hout het door het cambium geproduceerd', 5.00),
      new Materiaal('icoon2', 'Papier', 'Papier is het voornaamste bestanddeel van houtige planten: (vooral) bomen en struiken. Botanisch gezien is hout het door het cambium geproduceerd', 15.00),
      new Materiaal('icoon3', 'Karton', 'Karton is het voornaamste bestanddeel van houtige planten: (vooral) bomen en struiken. Botanisch gezien is hout het door het cambium geproduceerd', 7.20),
    ]);
  }

  ngOnInit() {
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
        this.materialen.push(result)
      }
    });
  }

  deleteMateriaal(materiaal: Materiaal) {
    this.shop$.subscribe((lijst) => lijst.splice(lijst.indexOf(materiaal), 1));
  }

  editMateriaal(materiaal: Materiaal) {
    this.shop$.subscribe((lijst) => lijst.splice(lijst.indexOf(materiaal), 1));
  }

  onSubmit() {
    console.log(this.materialen)
    const newModule =  new KlimModule(
      this.klimModule.value.moduleNaam,
      this.klimModule.value.standaardBudget,
      this.klimModule.value.duurInMinuten,
      this.klimModule.value.beschrijving,
      this.materialen);

    console.log(newModule);

    this._dataService
      .postModule(newModule)
      .subscribe();

    this._router.navigate(['Module/Lijst']);
  }
}
