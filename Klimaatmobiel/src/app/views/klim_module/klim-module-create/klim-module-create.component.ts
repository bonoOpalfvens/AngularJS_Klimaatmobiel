import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { KlimModule } from 'src/app/models/klim-module';
import { Materiaal } from 'src/app/models/materiaal';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ModuleMateriaal } from 'src/app/models/module-materiaal';

@Component({
  selector: 'app-klim-module-create',
  templateUrl: './klim-module-create.component.html',
  styleUrls: ['./klim-module-create.component.css']
})

export class KlimModuleCreateComponent implements OnInit {

  public klimModule: FormGroup;
  public materialen$: Observable<Materiaal[]>;

  constructor(
    private _fb: FormBuilder,
    private _dataService: DataService,
    private _router: Router
  ) {}

  get materialen(): FormArray {
    return <FormArray>this.klimModule.get('materialen');
  }

  ngOnInit() {
    this.klimModule = this._fb.group({
      moduleNaam: ['', [Validators.required]],
      standaardBudget: ['', [Validators.required]],
      duurInMinuten: ['',[Validators.required]],
      materialen: this._fb.array([this.addMateriaal()])
    });
    
    this.materialen$ = this._dataService.materialen$;

    this.materialen.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(ingList => {
      // if the last entry's name is typed, add a new empty one
      // if we're removing an entry's name, and there is an empty one after that one, remove the empty one
      const lastElement = ingList[ingList.length - 1];

      // if (lastElement.amount.length) {
      //   (this.ingredients.controls[0] as FormGroup).updateValueAndValidity({
      //     emitEvent: false
      //   });
      // }
      if (lastElement.aantalInStock) {
        this.materialen.push(this.addMateriaal());
      } else if (ingList.length >= 2) {
        const secondToLast = ingList[ingList.length - 2];
        if (
          !lastElement.materiaal &&
          !lastElement.aantalInStock &&
          !lastElement.prijs &&
          (!secondToLast.aantalInStock)
        ) {
          this.materialen.removeAt(this.materialen.length - 1);
        }
      }
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

  onSubmit() {
    let materialen = this.klimModule.value.materialen
    .filter(m => m.materiaal && m.prijs && m.aantalInStock)
    .map(m => {
      return new ModuleMateriaal(m.materiaal, m.prijs, m.aantalInStock);
    });

    var newModule =  new KlimModule(
      this.klimModule.value.moduleNaam,
      this.klimModule.value.standaardBudget,
      this.klimModule.value.duurInMinuten,
      materialen);

      console.log(newModule)

    this._dataService
      .postModule(newModule)
      .subscribe();
    
    this._router.navigate(['Module/Lijst']);
  }
}
