import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInstanceCreateDialogComponent } from './module-instance-create-dialog.component';

describe('ModuleInstanceCreateDialogComponent', () => {
  let component: ModuleInstanceCreateDialogComponent;
  let fixture: ComponentFixture<ModuleInstanceCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleInstanceCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleInstanceCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
