import {Location} from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportEndOfModuleComponent } from './rapport-end-of-module.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('RapportEndOfModuleComponent', () => {
  let component: RapportEndOfModuleComponent;
  let fixture: ComponentFixture<RapportEndOfModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [ RapportEndOfModuleComponent ],
      providers: [
        {provide: Location, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportEndOfModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
