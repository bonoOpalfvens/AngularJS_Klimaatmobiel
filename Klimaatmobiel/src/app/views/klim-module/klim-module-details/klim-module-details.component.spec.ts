import { AddMateriaalComponent } from './../add-materiaal/add-materiaal.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleDetailsComponent } from './klim-module-details.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { RouterModule, RouterLink, Router, ActivatedRoute } from '@angular/router';
import { KlimModule } from 'src/app/models/klim-module';

describe('KlimModuleDetailsComponent', () => {
  let component: KlimModuleDetailsComponent;
  let fixture: ComponentFixture<KlimModuleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleDetailsComponent ],
      imports: [MaterialModule, ReactiveFormsModule, RouterModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: Router, useValue: {}},
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleDetailsComponent);
    component = fixture.componentInstance;
    component.module = new KlimModule("", 200, 200, "", []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
