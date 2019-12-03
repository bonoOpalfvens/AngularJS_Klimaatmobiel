import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEigenschapComponent } from './add-eigenschap.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

describe('AddEigenschapComponent', () => {
  let component: AddEigenschapComponent;
  let fixture: ComponentFixture<AddEigenschapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEigenschapComponent ],
      imports: [MaterialModule, ReactiveFormsModule],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEigenschapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
