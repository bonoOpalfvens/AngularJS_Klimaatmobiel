import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInstanceViewComponent } from './module-instance-view.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ModuleInstance } from 'src/app/models/module-instance';
import { KlimModule } from 'src/app/models/klim-module';

describe('ModuleInstanceViewComponent', () => {
  let component: ModuleInstanceViewComponent;
  let fixture: ComponentFixture<ModuleInstanceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleInstanceViewComponent ],
      imports: [MaterialModule, RouterModule, HttpClientTestingModule],
      providers: [
        {provide: Router, useValue: {}},
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleInstanceViewComponent);
    component = fixture.componentInstance;
    component.moduleInstance = new ModuleInstance(new KlimModule(undefined, undefined, undefined, undefined, []), undefined)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});