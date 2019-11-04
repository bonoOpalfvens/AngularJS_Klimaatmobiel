import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleDetailsComponent } from './klim-module-details.component';

describe('KlimModuleDetailsComponent', () => {
  let component: KlimModuleDetailsComponent;
  let fixture: ComponentFixture<KlimModuleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
