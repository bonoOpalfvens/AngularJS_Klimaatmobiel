import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiaal } from 'src/app/models/materiaal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AddMateriaalData } from '../klim-module-create/klim-module-create.component';
import { ModuleMateriaal } from 'src/app/models/module-materiaal';

@Component({
  selector: 'app-add-materiaal',
  templateUrl: './add-materiaal.component.html',
  styleUrls: ['./add-materiaal.component.css']
})
export class AddMateriaalComponent implements OnInit {

  public materialen$: Observable<Materiaal[]>;
  public materiaalForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _dataService: DataService,
    public dialogRef: MatDialogRef<AddMateriaalComponent>) 
    { }

  ngOnInit() {
    this.materialen$ = this._dataService.materialen$;
    this.materiaalForm = this._fb.group({
      materiaal: ['', [Validators.required]],
      prijs: ['', [Validators.required, Validators.min(0)]],
      aantalInStock: ['',[Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    let modmat: ModuleMateriaal = new ModuleMateriaal(
      this.materiaalForm.value.materiaal, 
      this.materiaalForm.value.prijs, 
      this.materiaalForm.value.aantalInStock);

    this.dialogRef.close(modmat);
  }

}
