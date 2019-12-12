import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLineViewComponent } from './order-line-view.component';
import { OrderLine } from 'src/app/models/order-line';
import { Materiaal } from 'src/app/models/materiaal';

describe('OrderLineViewComponent', () => {
  let component: OrderLineViewComponent;
  let fixture: ComponentFixture<OrderLineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLineViewComponent);
    component = fixture.componentInstance;
    component.orderLine = new OrderLine(new Materiaal(undefined, undefined, undefined, undefined), undefined)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
