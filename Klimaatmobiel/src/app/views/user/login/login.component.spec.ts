import { AuthorisationService } from 'src/app/services/authorisation.service';
import { KlimModuleCreateComponent } from './../../klim-module/klim-module-create/klim-module-create.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common';

import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { userRoutes } from 'src/app/app-routing.module';
import { RegisterComponent } from '../register/register.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;

  let validUser = {
    email: "leerkracht1@gmail.com",
    password: "Password1*"
  }

  let blankUser = {
    email: "",
    password: ""
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, RegisterComponent ],
      imports: [MaterialModule, ReactiveFormsModule, RouterTestingModule.withRoutes(userRoutes), HttpClientTestingModule],
      providers: [
        {provide: AuthorisationService, useClass: AuthorisationService}
      ]
    })
    .compileComponents();

    location = TestBed.get(Location);
  }));

  function updateForm(userEmail, userPassword) {
    console.log(component.user.value);
    component.user.controls['email'].setValue(userEmail);
    component.user.controls['password'].setValue(userPassword);
    console.log(component.user.value);
  }

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

  it('form value should update when input is changed', (() => {
    component.ngOnInit();
    updateForm(validUser.email, validUser.password);
    expect(component.user.value).toEqual(validUser);
  }));

  it('form should be invalid when input is empty', (() => {
    component.ngOnInit();
    updateForm(blankUser.email, blankUser.password);
    expect(component.user.invalid).toBeTruthy();
  }));

  it('should render form with email and password', (() => {
    let emailContainer = fixture.debugElement.nativeElement.querySelector('#emailContainer');
    let passwordContainer = fixture.debugElement.nativeElement.querySelector('#passwordContainer');
    let submitButton = fixture.debugElement.nativeElement.querySelector('button');

    expect(emailContainer).toBeDefined();
    expect(passwordContainer).toBeDefined();
    expect(submitButton).toBeDefined();
  }));

  it('should display email error msg when email input is empty', () => {
    component.ngOnInit();
    updateForm(blankUser.email, validUser.password);
    fixture.detectChanges();

    const errorMsg = fixture.debugElement.nativeElement.querySelector('#emailError');
    console.log(errorMsg);
    expect(errorMsg).toBeDefined();
    // expect(errorMsg.innerHTML).toContain('Field is required');
  })

});