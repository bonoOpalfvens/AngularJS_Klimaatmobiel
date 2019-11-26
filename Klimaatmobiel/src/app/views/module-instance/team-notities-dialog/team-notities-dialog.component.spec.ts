import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNotitiesDialogComponent } from './team-notities-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

describe('TeamNotitiesDialogComponent', () => {
  let component: TeamNotitiesDialogComponent;
  let fixture: ComponentFixture<TeamNotitiesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamNotitiesDialogComponent ],
      imports: [ReactiveFormsModule, MaterialModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNotitiesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});