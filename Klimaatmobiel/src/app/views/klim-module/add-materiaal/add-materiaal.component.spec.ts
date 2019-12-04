import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMateriaalComponent } from './add-materiaal.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

describe('AddMateriaalComponent', () => {
  let component: AddMateriaalComponent;
  let fixture: ComponentFixture<AddMateriaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMateriaalComponent ],
      imports: [MaterialModule, ReactiveFormsModule],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMateriaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
