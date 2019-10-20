import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { KlimModule } from 'src/app/models/klim-module';

import { ModuleMateriaal } from 'src/app/models/module-materiaal';
import { AddMateriaalComponent } from '../add-materiaal/add-materiaal.component';
import { Materiaal } from 'src/app/models/materiaal';

export interface AddMateriaalData {
  materiaal: Materiaal;
  prijs: number;
  aantalInStock: number;
}

@Component({
  selector: 'app-klim-module-create',
  templateUrl: './klim-module-create.component.html',
  styleUrls: ['./klim-module-create.component.css']
})

export class KlimModuleCreateComponent implements OnInit {

  public klimModule: FormGroup;
  private materialen: ModuleMateriaal[] = [];

  constructor(
    private _fb: FormBuilder,
    private _dataService: DataService,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.klimModule = this._fb.group({
      moduleNaam: ['', [Validators.required]],
      standaardBudget: ['', [Validators.required]],
      duurInMinuten: ['',[Validators.required]],
      beschrijving: ['']
    });
    
  }

  addMateriaal(): FormGroup {
    return this._fb.group(
      {
        materiaal: ['', [Validators.required]],
        prijs: ['', [Validators.required, Validators.min(0)]],
        aantalInStock: ['',  [Validators.required, Validators.min(0)]]
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMateriaalComponent, {});
    dialogRef.afterClosed().subscribe((result: ModuleMateriaal) => {
      this.materialen.push(result);
    });
  }

  onSubmit() {
    var newModule =  new KlimModule(
      this.klimModule.value.moduleNaam,
      this.klimModule.value.standaardBudget,
      this.klimModule.value.duurInMinuten,
      this.klimModule.value.beschrijving,
      this.materialen);

      console.log(newModule)

    this._dataService
      .postModule(newModule)
      .subscribe();
    
    this._router.navigate(['Module/Lijst']);
  }
}
