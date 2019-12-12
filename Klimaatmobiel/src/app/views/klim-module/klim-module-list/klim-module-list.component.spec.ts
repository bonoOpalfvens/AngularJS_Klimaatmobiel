import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KlimModuleViewComponent } from './../klim-module-view/klim-module-view.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleListComponent } from './klim-module-list.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ModuleFilterPipe } from 'src/app/pipes/module-filter.pipe';
import { ModuleInstanceModule } from '../../module-instance/module-instance.module';

describe('KlimModuleListComponent', () => {
  let component: KlimModuleListComponent;
  let fixture: ComponentFixture<KlimModuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleListComponent, ModuleFilterPipe, KlimModuleViewComponent ],
      imports: [MaterialModule, RouterModule, ModuleInstanceModule, HttpClientTestingModule],
      providers: [
        {provide: Router, valueOf: {}},
        {provide: ActivatedRoute, valueOf: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should load in a list of Modules', () => {
    
  });

  it('should start up klim-module-create when clicked', () => {
    
  });

  it('should filter list', () => {

  });

  it('should delete klim-module when clicked', () => {

  });
  */
});