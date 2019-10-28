import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-team-notities-dialog',
  templateUrl: './team-notities-dialog.component.html',
  styleUrls: ['./team-notities-dialog.component.css']
})
export class TeamNotitiesDialogComponent implements OnInit {

  public teamForm: FormGroup;
  public notities: string;

  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<TeamNotitiesDialogComponent>) {
      this.notities = data.notities;
     }

  ngOnInit() {
    this.teamForm = this._fb.group({
      notities: [this.notities, [Validators.required]]
    });
  }

  async onSubmit() {
    this.dialogRef.close(this.teamForm.value.notities);
  }
}
