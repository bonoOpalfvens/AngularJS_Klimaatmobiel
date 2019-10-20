import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleViewComponent } from './klim-module-view.component';

describe('KlimModuleViewComponent', () => {
  let component: KlimModuleViewComponent;
  let fixture: ComponentFixture<KlimModuleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
