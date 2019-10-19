import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { KlimModule } from 'src/app/models/klim-module';
import { Materiaal } from 'src/app/models/materiaal';

@Component({
  selector: 'app-klim-module-create',
  templateUrl: './klim-module-create.component.html',
  styleUrls: ['./klim-module-create.component.css']
})

export class KlimModuleCreateComponent implements OnInit {

  public klimModule: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
  ) {}

  get materialen(): FormArray {
    return <FormArray>this.klimModule.get('materialen');
  }

  ngOnInit() {
    this.klimModule = this.fb.group({
      moduleNaam: ['', [Validators.required]],
      standaardBudget: ['', [Validators.required]],
      duurInMinuten: ['',[Validators.required]],
      ingredients: this.fb.array([this.addMateriaal()])
    });
  }

  addMateriaal(): FormGroup {
    return this.fb.group(
      {
        materiaal: [''],
        prijs: ['', [Validators.required]],
        amountInStock: ['',  [Validators.required]]
      }
    );
  }

  onSubmit() {
    this.dataService
      .postModule(new KlimModule(
        this.klimModule.value.moduleNaam,
        this.klimModule.value.standaardBudget,
        this.klimModule.value.duurInMinuten,
        this.materialen.value.map(Materiaal.fromJSON)
        ))
      .subscribe();
  }
}
