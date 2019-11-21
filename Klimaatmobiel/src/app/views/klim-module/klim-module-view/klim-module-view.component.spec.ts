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
      imports: [MaterialModule, RouterModule],
      providers: [
        {provide: HttpClient, useValue: {}},
        {provide: Router, useValue: {}},
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimModuleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.klimModule = new KlimModule("", 200, 200, "", []);
    expect(component).toBeTruthy();
  });
});
