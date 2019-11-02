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
  MatSnackBarModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule,
  MatDialogModule,
  MatGridListModule,
  MatTableModule,
  MatBadgeModule
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
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatBadgeModule
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
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
