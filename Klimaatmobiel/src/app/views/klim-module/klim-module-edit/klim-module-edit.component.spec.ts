import { KlimModule } from 'src/app/models/klim-module';
import { ReactiveFormsModule } from '@angular/forms';
import { KlimModuleDetailsComponent } from './../klim-module-details/klim-module-details.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleEditComponent } from './klim-module-edit.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('KlimModuleEditComponent', () => {
  let component: KlimModuleEditComponent;
  let fixture: ComponentFixture<KlimModuleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleEditComponent, KlimModuleDetailsComponent ],
      imports: [MaterialModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: Router, useValue: {}},
        {provide: ActivatedRoute, useValue: {
          data: of({module: new KlimModule(undefined, undefined, undefined, undefined, [])})
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleEditComponent);
    component = fixture.componentInstance;
    component.module = new KlimModule(undefined, undefined, undefined, undefined, []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
