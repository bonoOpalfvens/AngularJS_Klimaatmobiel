import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OrderLineViewComponent } from './../order-line-view/order-line-view.component';
import { BestellingViewComponent } from './../bestelling-view/bestelling-view.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellingListComponent } from './bestelling-list.component';
import { MaterialModule } from 'src/app/material.module';
import { Team } from 'src/app/models/team';

describe('BestellingListComponent', () => {
  let component: BestellingListComponent;
  let fixture: ComponentFixture<BestellingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestellingListComponent, BestellingViewComponent, OrderLineViewComponent ],
      imports: [MaterialModule],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {
          bestellingen: [],
          team: new Team("", undefined, undefined, undefined, [])
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
