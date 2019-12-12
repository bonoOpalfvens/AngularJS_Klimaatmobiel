import { KlimModuleDetailsComponent } from './../klim-module-details/klim-module-details.component';
import { KlimModuleModule } from './../klim-module.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleCreateComponent } from './klim-module-create.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('KlimModuleCreateComponent', () => {
  let component: KlimModuleCreateComponent;
  let fixture: ComponentFixture<KlimModuleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KlimModuleCreateComponent, KlimModuleDetailsComponent],
      imports: [MaterialModule, ReactiveFormsModule, RouterModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: Router, useValue: {}},
        {provide: HttpClient, useValue: {}},
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});