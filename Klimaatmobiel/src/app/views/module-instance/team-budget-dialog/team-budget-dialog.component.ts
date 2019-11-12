import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-team-budget-dialog',
  templateUrl: './team-budget-dialog.component.html',
  styleUrls: ['./team-budget-dialog.component.css']
})
export class TeamBudgetDialogComponent implements OnInit {

  public teamForm: FormGroup;
  public budget: string;
  
  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<TeamBudgetDialogComponent>) { 
      this.budget = data.budget;
    }

  ngOnInit() {
    this.teamForm = this._fb.group({
      budget: [this.budget, [Validators.required]]
    });
  }

  valueChanged(): boolean {
    return this.budget !== this.teamForm.value.budget;
  }

  async onSubmit() {
    this.dialogRef.close(this.teamForm.value.budget);
  }

}
