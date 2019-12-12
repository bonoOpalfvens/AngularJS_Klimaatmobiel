import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInstanceCreateDialogComponent } from './module-instance-create-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

describe('ModuleInstanceCreateDialogComponent', () => {
  let component: ModuleInstanceCreateDialogComponent;
  let fixture: ComponentFixture<ModuleInstanceCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleInstanceCreateDialogComponent ],
      imports: [MaterialModule, ReactiveFormsModule],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleInstanceCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
