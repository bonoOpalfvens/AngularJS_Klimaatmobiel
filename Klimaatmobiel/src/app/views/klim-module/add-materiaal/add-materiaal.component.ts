import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiaal } from 'src/app/models/materiaal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-materiaal',
  templateUrl: './add-materiaal.component.html',
  styleUrls: ['./add-materiaal.component.css']
})
export class AddMateriaalComponent implements OnInit {
  @Input() materiaal: Materiaal;
  private base64: any;

  private _file: File;
  public materialen$: Observable<Materiaal[]>;
  public materiaalForm: FormGroup;

  constructor(
    // tslint:disable: variable-name
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddMateriaalComponent>
  ) { }

  ngOnInit() {
    if (this.materiaal) {
      this.materiaalForm = this._fb.group({
        naam: [this.materiaal.naam, [Validators.required]],
        prijs: [this.materiaal.prijs, [Validators.required, Validators.min(0)]],
        omschrijving: [this.materiaal.omschrijving, [Validators.required]]
      });
      this.base64 = this.materiaal.icoon;
    } else {
      this.materiaalForm = this._fb.group({
        naam: ['', [Validators.required]],
        prijs: ['', [Validators.required, Validators.min(0)]],
        omschrijving: ['', [Validators.required]]
      });
    }
  }

  onFileChanged(event: any) {
    this._file = event.target.files[0];
  }

  async onSubmit() {
    if (this._file) {
      this.base64 = await toBase64(this._file);
    }
    const mat: Materiaal = new Materiaal(
      this.base64,
      this.materiaalForm.value.naam,
      this.materiaalForm.value.omschrijving,
      this.materiaalForm.value.prijs);

    this.dialogRef.close(mat);
  }
}

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
