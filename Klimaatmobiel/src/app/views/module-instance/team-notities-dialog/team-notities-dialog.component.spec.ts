import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamNotitiesDialogComponent } from './team-notities-dialog.component';

describe('TeamNotitiesDialogComponent', () => {
  let component: TeamNotitiesDialogComponent;
  let fixture: ComponentFixture<TeamNotitiesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamNotitiesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNotitiesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
