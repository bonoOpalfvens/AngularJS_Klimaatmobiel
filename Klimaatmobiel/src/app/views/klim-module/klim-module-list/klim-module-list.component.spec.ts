import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleListComponent } from './klim-module-list.component';

describe('KlimModuleListComponent', () => {
  let component: KlimModuleListComponent;
  let fixture: ComponentFixture<KlimModuleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleListComponent ]
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
});
