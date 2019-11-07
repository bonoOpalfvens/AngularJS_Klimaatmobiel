import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellingViewComponent } from './bestelling-view.component';

describe('BestellingViewComponent', () => {
  let component: BestellingViewComponent;
  let fixture: ComponentFixture<BestellingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestellingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
