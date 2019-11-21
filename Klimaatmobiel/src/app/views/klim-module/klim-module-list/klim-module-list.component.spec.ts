import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleListComponent } from './klim-module-list.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

describe('KlimModuleListComponent', () => {
  let component: KlimModuleListComponent;
  let fixture: ComponentFixture<KlimModuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleListComponent ],
      imports: [MaterialModule, RouterModule]
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
