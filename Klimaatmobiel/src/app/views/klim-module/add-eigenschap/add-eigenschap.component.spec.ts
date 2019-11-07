import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEigenschapComponent } from './add-eigenschap.component';

describe('AddEigenschapComponent', () => {
  let component: AddEigenschapComponent;
  let fixture: ComponentFixture<AddEigenschapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEigenschapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEigenschapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
