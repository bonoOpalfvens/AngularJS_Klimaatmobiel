import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KlimModule } from 'src/app/models/klim-module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Observable, of } from 'rxjs';
import { Materiaal } from 'src/app/models/materiaal';
import { MatDialog } from '@angular/material';
import { Eigenschap } from 'src/app/models/eigenschap';
import { AddMateriaalComponent } from '../add-materiaal/add-materiaal.component';
import { AddEigenschapComponent } from '../add-eigenschap/add-eigenschap.component';
import { Eenheid } from 'src/app/models/eenheid';

@Component({
  selector: 'app-klim-module-details',
  templateUrl: './klim-module-details.component.html',
  styleUrls: ['./klim-module-details.component.css']
})
export class KlimModuleDetailsComponent implements OnInit {

  @Input() public module: KlimModule;
  @Output() public outModule = new EventEmitter<KlimModule>();

  public shop$: Observable<Materiaal[]>;

  public klimModule: FormGroup;
  private materialen: Materiaal[] = [];

  constructor(
    private _fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.module);
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
    const dialogRef = this.dialog.open(AddMateriaalComponent, {
    });
    dialogRef.afterClosed().subscribe((result: Materiaal) => {
      if (result) {
        this.materialen.push(result);
      }
    });
  }

  deleteEigenschap(materiaal: Materiaal, eigenschap: Eigenschap) {
    materiaal.eigenschappen.splice(materiaal.eigenschappen.indexOf(eigenschap), 1);
  }

  addEigenschap(materiaal: Materiaal) {
    const dialogRef = this.dialog.open(AddEigenschapComponent, {
      data: { mat: materiaal }
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
        this.materialen[this.materialen.indexOf(materiaal)] = result;
      }
    });
  }
  getEenheidString(eenheid: Eenheid) {
    return Eenheid[eenheid];
  }

  onSubmit() {
    const newModule = new KlimModule(
      this.klimModule.value.moduleNaam,
      this.klimModule.value.standaardBudget,
      this.klimModule.value.duurInMinuten,
      this.klimModule.value.beschrijving,
      this.materialen);
    newModule.id = this.module.id;
    this.outModule.emit(newModule);
  }
}
