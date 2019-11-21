import { ReactiveFormsModule } from '@angular/forms';
import { KlimModuleDetailsComponent } from './../klim-module-details/klim-module-details.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleEditComponent } from './klim-module-edit.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from 'selenium-webdriver/http';

describe('KlimModuleEditComponent', () => {
  let component: KlimModuleEditComponent;
  let fixture: ComponentFixture<KlimModuleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleEditComponent, KlimModuleDetailsComponent ],
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
    fixture = TestBed.createComponent(KlimModuleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
