import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { userRoutes } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let location: Location;

  let validUser = {
    email: "leerkracht5@gmail.com",
    passwordGroup: {
      password: "Password1*",
      confirmPassword: "Password1*"
    },
    firstName: "Jos",
    lastName: "Den Os",
    school: "Oscar Romero"
  }

  let blankUser = {
    email: "",
    passwordGroup: {
      password: "",
      confirmPassword: ""
    },
    firstName: "",
    lastName: "",
    school: "",
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, ReactiveFormsModule, RouterTestingModule.withRoutes(userRoutes), HttpClientTestingModule],
      declarations: [ RegisterComponent, LoginComponent ],
      providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy}
      ]
    })
    .compileComponents();

    location = TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function updateForm(userEmail, userPassword, userConfirmPassword, userFirstName, userLastName, userSchool) {
    console.log(component.user.value);
    component.user.controls['email'].setValue(userEmail);
    component.user.controls['passwordGroup'].setValue({password: userPassword, confirmPassword: userConfirmPassword});
    component.user.controls['school'].setValue(userSchool);
    component.user.controls['firstName'].setValue(userFirstName);
    component.user.controls['lastName'].setValue(userLastName);
    console.log(component.user.value);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direct to loginpage on click of link', fakeAsync(() => {
    let link = fixture.debugElement.nativeElement.querySelector('a');
    link.click();
    tick();
    expect(location.path()).toBe('/User/Login');
  }));

  it('form value should update when input is changed', (() => {
    component.ngOnInit();
    updateForm(validUser.email,
       validUser.passwordGroup.password, validUser.passwordGroup.confirmPassword,
       validUser.firstName, validUser.lastName, validUser.school);

    expect(component.user.value).toEqual(validUser);
  }));

  it('form should be invalid when input is empty', (() => {
    component.ngOnInit();
    updateForm(blankUser.email,
       blankUser.passwordGroup.password, blankUser.passwordGroup.confirmPassword,
       blankUser.firstName, blankUser.lastName, blankUser.school);

    expect(component.user.invalid).toBeTruthy();
  }));
});
