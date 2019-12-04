import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellingViewComponent } from './bestelling-view.component';
import { OrderLineViewComponent } from '../order-line-view/order-line-view.component';
import { MaterialModule } from 'src/app/material.module';
import { Team } from 'src/app/models/team';
import { Bestelling } from 'src/app/models/bestelling';

describe('BestellingViewComponent', () => {
  let component: BestellingViewComponent;
  let fixture: ComponentFixture<BestellingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestellingViewComponent, OrderLineViewComponent ],
      imports: [MaterialModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellingViewComponent);
    component = fixture.componentInstance;
    component.bestelling = new Bestelling(undefined, [], undefined);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
