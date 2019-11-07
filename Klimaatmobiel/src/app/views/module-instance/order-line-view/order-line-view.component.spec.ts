import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLineViewComponent } from './order-line-view.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
