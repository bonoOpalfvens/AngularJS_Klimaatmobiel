import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInstanceViewComponent } from './module-instance-view.component';

describe('ModuleInstanceViewComponent', () => {
  let component: ModuleInstanceViewComponent;
  let fixture: ComponentFixture<ModuleInstanceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleInstanceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleInstanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
