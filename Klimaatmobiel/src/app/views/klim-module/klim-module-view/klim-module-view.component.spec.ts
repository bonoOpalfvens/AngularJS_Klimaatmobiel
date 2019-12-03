import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimModuleViewComponent } from './klim-module-view.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { KlimModule } from 'src/app/models/klim-module';

describe('KlimModuleViewComponent', () => {
  let component: KlimModuleViewComponent;
  let fixture: ComponentFixture<KlimModuleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimModuleViewComponent ],
      imports: [MaterialModule, RouterModule, HttpClientTestingModule],
      providers: [
        {provide: Router, useValue: {}},
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleViewComponent);
    component = fixture.componentInstance;
    component.klimModule = new KlimModule("", 200, 200, "", []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
