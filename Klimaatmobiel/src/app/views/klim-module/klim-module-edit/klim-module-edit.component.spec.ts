import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleEditComponent } from './klim-module-edit.component';

describe('KlimModuleEditComponent', () => {
  let component: KlimModuleEditComponent;
  let fixture: ComponentFixture<KlimModuleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleEditComponent ]
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
