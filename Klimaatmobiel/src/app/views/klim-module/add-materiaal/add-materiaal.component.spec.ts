import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMateriaalComponent } from './add-materiaal.component';

describe('AddMateriaalComponent', () => {
  let component: AddMateriaalComponent;
  let fixture: ComponentFixture<AddMateriaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMateriaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMateriaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
