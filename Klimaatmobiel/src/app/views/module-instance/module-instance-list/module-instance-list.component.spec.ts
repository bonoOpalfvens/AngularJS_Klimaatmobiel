import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInstanceListComponent } from './module-instance-list.component';

describe('ModuleInstanceListComponent', () => {
  let component: ModuleInstanceListComponent;
  let fixture: ComponentFixture<ModuleInstanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleInstanceListComponent ]
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
