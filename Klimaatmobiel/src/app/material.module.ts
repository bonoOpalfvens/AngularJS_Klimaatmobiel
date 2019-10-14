import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // AngularMaterialAnimations
    BrowserAnimationsModule,
    // AngularMaterial
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
