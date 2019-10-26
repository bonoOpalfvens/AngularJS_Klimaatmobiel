import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-module-instance-create-dialog',
  templateUrl: './module-instance-create-dialog.component.html',
  styleUrls: ['./module-instance-create-dialog.component.css']
})

export class ModuleInstanceCreateDialogComponent implements OnInit {

  public moduleInstanceForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ModuleInstanceCreateDialogComponent>) { }

  ngOnInit() {
    this.moduleInstanceForm = this._fb.group({
      aantalTeams: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
    });
  }

  async onSubmit() {
    this.dialogRef.close(this.moduleInstanceForm.value.aantalTeams);
  }

}
