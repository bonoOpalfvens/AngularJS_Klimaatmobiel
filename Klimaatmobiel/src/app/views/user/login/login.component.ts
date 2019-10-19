import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorisationService } from 'src/app/services/authorisation.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Output() public newUser = new EventEmitter();
  public user: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthorisationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.authService
      .login(this.user.value.email, this.user.value.password)
      .subscribe(
        val => {
          if (val) {
            this.router.navigate(['/Home']);
            this.snackBar.open(
              `Hallo, ${this.user.value.email}`,
              'Sluit',
              { duration: 8000 }
            );
          }
        },
        (err: HttpErrorResponse) => {
          if (err.status === 400) {
            this.user.controls.email.setErrors({ login: true });
            this.user.controls.password.setErrors({ login: true });
          } else {
            console.log(err);
            this.snackBar.open(
              `Fout bij het inloggen van gebruiker: ${this.user.value.email}`,
              'sluit',
              { duration: 15000 }
            );
          }
        }
      );
  }

  getErrorMessage(errors: any) {
    if (!errors) { return null; }
    if (errors.required) { return 'Field is required';
    } else if (errors.login) { return 'Incorrect username or password';
    } else if (errors.pattern) { return `Invalid format`; }
  }
}
