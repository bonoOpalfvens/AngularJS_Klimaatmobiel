import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { KlimModuleCreateComponent } from './klim-module-create/klim-module-create.component';
import { KlimModuleDetailsComponent } from './klim-module-details/klim-module-details.component';
import { KlimModuleListComponent } from './klim-module-list/klim-module-list.component';
import { KlimModuleViewComponent } from './klim-module-view/klim-module-view.component';
import { MatButton } from '@angular/material';

@NgModule({
  declarations: [KlimModuleCreateComponent, KlimModuleDetailsComponent, KlimModuleListComponent, KlimModuleViewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    KlimModuleCreateComponent,
    KlimModuleDetailsComponent,
    KlimModuleListComponent,
    KlimModuleViewComponent
  ]
})
export class KlimModuleModule { }