import { KlimModuleCreateComponent } from './../../klim-module/klim-module-create/klim-module-create.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common';

import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes, userRoutes } from 'src/app/app-routing.module';
import { RegisterComponent } from '../register/register.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, RegisterComponent ],
      imports: [MaterialModule, ReactiveFormsModule, RouterTestingModule.withRoutes(userRoutes), HttpClientTestingModule]
    })
    .compileComponents();

    location = TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direct to registerpage on click of link', fakeAsync(() => {
    let link = fixture.debugElement.nativeElement.querySelector('a');
    link.click();
    tick();
    expect(location.path()).toBe('/User/Register');
  }));

  it('should login when submitting with correct data', () => {

  });

  it('should not be able to login when submitting with empty email field', () => {

  });

  it('should not be able to login when submitting with empty password field', () => {

  });

  it('should fail login when submitting with incorrect data', () => {

  });
});