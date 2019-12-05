import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { School } from 'src/app/models/school';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { AuthorisationService } from 'src/app/services/authorisation.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  public scholen$: Observable<School[]>;
  public user: FormGroup;
  public user$: BehaviorSubject<string>;

  constructor(    
    private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthorisationService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.scholen$ = this.dataService.scholen$;
    this.user$ = this.authService.user$;


    this.user = this.fb.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      firstName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          Validators.pattern(/^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/)
        ]
      ],
      lastName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          Validators.pattern(/^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/)
        ]
      ],
      school: ['', ],
      passwordGroup: this.fb.group(
        {
          password: ['',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(30),
              Validators.pattern(
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,30}$/
              )
            ]
          ],
          confirmPassword: ['', Validators.required]
        },
        { validator: comparePasswords }
      )
    });
  }

  onSubmit() {
    console.log('got here1');
    if (this.user.valid) {
      console.log('got here2');
      this.authService
        .change(
          this.user.value.email,
          this.user.value.firstName,
          this.user.value.lastName,
          this.user.value.school,
          this.user.value.password,
          this.user.value.confirmPassword
        )
        .subscribe(
          val => {
            if (val) {
              this.router.navigate(['/Module/Lijst']);
              this.snackBar.open(
                `Gegevens succesvol gewijzigd`,
                'Sluit',
                { duration: 8000 }
              );
            } else {
              this.snackBar.open(
                `Gegevens konden niet gewijzigd worden`,
                'Sluit',
                { duration: 8000 }
              );
            }
          },
          (err: HttpErrorResponse) => {
            this.snackBar.open(
              `Fout bij het wijzigen van gegevens`,
              'Sluit',
              { duration: 15000 }
            );
            console.log(err);
          }
        );
        }
  }

  getErrorMessage(errors: any) {
      if (!errors) { return null; }
      if (errors.required) { return 'Veld is verplicht'; } else if (errors.minlength) {
        return `Veld moet minstens ${
          errors.minlength.requiredLength
        } karakters bevatten (heeft ${errors.minlength.actualLength})`;
      } else if (errors.maxlength) {
            return `Veld kan maximum ${
              errors.maxlength.requiredLength
            } karakters bevatten (heeft ${errors.maxlength.actualLength})`;
      } else if (errors.email) { return `Ongeldig formaat`;
      } else if (errors.passwordsDiffer) { return `Wachtwoorden komen niet overeen`;
      } else if (errors.pattern) { return `Ongeldig formaat`; }
  }
}

  function comparePasswords(control: AbstractControl): { [key: string]: any } {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password.value === confirmPassword.value
      ? null
      : { passwordsDiffer: true };
  }