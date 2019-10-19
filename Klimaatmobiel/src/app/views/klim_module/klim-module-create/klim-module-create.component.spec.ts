import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleCreateComponent } from './klim-module-create.component';

describe('KlimModuleCreateComponent', () => {
  let component: KlimModuleCreateComponent;
  let fixture: ComponentFixture<KlimModuleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
