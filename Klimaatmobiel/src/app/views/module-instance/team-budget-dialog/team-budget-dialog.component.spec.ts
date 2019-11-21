import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBudgetDialogComponent } from './team-budget-dialog.component';

describe('TeamBudgetDialogComponent', () => {
  let component: TeamBudgetDialogComponent;
  let fixture: ComponentFixture<TeamBudgetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBudgetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBudgetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
