import { Component, OnInit, Input, Inject } from '@angular/core';
import { Materiaal } from 'src/app/models/materiaal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Eenheid } from 'src/app/models/eenheid';

@Component({
  selector: 'app-add-materiaal',
  templateUrl: './add-materiaal.component.html',
  styleUrls: ['./add-materiaal.component.css']
})
export class AddMateriaalComponent implements OnInit {
  @Input() materiaal: Materiaal;

  // tslint:disable-next-line: variable-name
  private _file: File;
  public materiaalForm: FormGroup;
  private map = { 0: Eenheid.ml, 1: Eenheid.g, 2: Eenheid.cm };

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddMateriaalComponent>,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    if (this.materiaal) {
      this.materiaalForm = this._fb.group({
        icoon: [this.materiaal.icoon, [Validators.required]],
        naam: [this.materiaal.naam, [Validators.required]],
        eenheid: [this.eenheidToVal(this.materiaal.eenheid), [Validators.required]],
        prijs: [this.materiaal.prijs, [Validators.required, Validators.min(0)]],
        omschrijving: [this.materiaal.omschrijving, [Validators.required]]
      });
    } else {
      this.materiaalForm = this._fb.group({
        icoon: ['', [Validators.required]],
        naam: ['', [Validators.required]],
        eenheid: ['-1', [Validators.required]],
        prijs: ['', [Validators.required, Validators.min(0)]],
        omschrijving: ['', [Validators.required]]
      });
    }
  }

  onFileChanged(event: any) {
    this._file = event.target.files[0];
  }

  async onSubmit() {
    const mat: Materiaal = new Materiaal(
      this.materiaalForm.value.icoon,
      this.materiaalForm.value.naam,
      this.materiaalForm.value.omschrijving,
      this.materiaalForm.value.prijs);
    mat.eenheid = this.toEenheid(this.materiaalForm.value.eenheid);
    console.log(mat);

    this.dialogRef.close(mat);
  }

  toEenheid = val => {
    return this.map[val];
  }

  eenheidToVal = e => {
    switch (e) {
      case Eenheid.ml:
        return '0';
      case Eenheid.g:
        return '1';
      case Eenheid.cm:
        return '2';
      default:
        return '-1';
    }
  }
}
