import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInstanceListComponent } from './module-instance-list.component';
import { MaterialModule } from 'src/app/material.module';
import { ModuleInstanceViewComponent } from '../module-instance-view/module-instance-view.component';
import { RouterModule, Router } from '@angular/router';

describe('ModuleInstanceListComponent', () => {
  let component: ModuleInstanceListComponent;
  let fixture: ComponentFixture<ModuleInstanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleInstanceListComponent, ModuleInstanceViewComponent ],
      imports: [MaterialModule, RouterModule, HttpClientTestingModule],
      providers: [
        {provide: Router, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleInstanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
