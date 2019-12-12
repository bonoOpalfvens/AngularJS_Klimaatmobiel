import { ModuleInstance } from 'src/app/models/module-instance';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceDashboardComponent } from './instance-dashboard.component';
import { MaterialModule } from 'src/app/material.module';
import { TeamListComponent } from '../team-list/team-list.component';
import { TeamViewComponent } from '../team-view/team-view.component';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { KlimModule } from 'src/app/models/klim-module';

describe('InstanceDashboardComponent', () => {
  let component: InstanceDashboardComponent;
  let fixture: ComponentFixture<InstanceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceDashboardComponent, TeamListComponent, TeamViewComponent ],
      imports: [MaterialModule, RouterModule, HttpClientTestingModule],
      providers: [
        {provide: Router, useValue: {}},
        {provide: ActivatedRoute, useValue: {
          data: of({moduleInstance: new ModuleInstance(new KlimModule(undefined, undefined, undefined, undefined, []), undefined)})
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});