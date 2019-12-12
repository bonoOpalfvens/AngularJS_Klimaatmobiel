import { Component, OnInit, Input, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Eigenschap } from 'src/app/models/eigenschap';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddMateriaalComponent } from '../add-materiaal/add-materiaal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-eigenschap',
  templateUrl: './add-eigenschap.component.html',
  styleUrls: ['./add-eigenschap.component.css']
})
export class AddEigenschapComponent implements OnInit {
  private base64: any;

  // tslint:disable-next-line: variable-name
  private _file: File;
  public eigenschapForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEigenschapComponent>
  ) { }

  ngOnInit() {

    this.eigenschapForm = this._fb.group({
      naam: ['', [Validators.required]]
    });
  }

  onFileChanged(event: any) {
    this._file = event.target.files[0];
  }

  async onSubmit() {
    if (this._file) {
      this.base64 = await toBase64(this._file);
    }
    const eig: Eigenschap = new Eigenschap(
      this.eigenschapForm.value.naam,
      this.base64);
    this.dialogRef.close(eig);
  }
}

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
