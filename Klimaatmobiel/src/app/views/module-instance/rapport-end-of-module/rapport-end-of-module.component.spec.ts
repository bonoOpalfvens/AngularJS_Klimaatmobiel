import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportEndOfModuleComponent } from './rapport-end-of-module.component';

describe('RapportEndOfModuleComponent', () => {
  let component: RapportEndOfModuleComponent;
  let fixture: ComponentFixture<RapportEndOfModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapportEndOfModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportEndOfModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
