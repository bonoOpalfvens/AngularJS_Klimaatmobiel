import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBudgetDialogComponent } from './team-budget-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

describe('TeamBudgetDialogComponent', () => {
  let component: TeamBudgetDialogComponent;
  let fixture: ComponentFixture<TeamBudgetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBudgetDialogComponent ],
      imports: [ReactiveFormsModule, MaterialModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBudgetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});