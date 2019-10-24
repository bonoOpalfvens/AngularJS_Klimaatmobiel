import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { KlimModuleCreateComponent } from './klim-module-create/klim-module-create.component';
import { KlimModuleListComponent } from './klim-module-list/klim-module-list.component';
import { KlimModuleViewComponent } from './klim-module-view/klim-module-view.component';

import { AddMateriaalComponent } from './add-materiaal/add-materiaal.component';
import { ModuleFilterPipe } from 'src/app/pipes/module-filter.pipe';
import { KlimModuleEditComponent } from './klim-module-edit/klim-module-edit.component';

@NgModule({
  declarations: [
    KlimModuleCreateComponent,
    KlimModuleListComponent,
    KlimModuleViewComponent,
    AddMateriaalComponent,
    ModuleFilterPipe,
    KlimModuleEditComponent],

  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [AddMateriaalComponent],
  exports: [
    KlimModuleCreateComponent,
    KlimModuleListComponent,
    KlimModuleViewComponent,
    AddMateriaalComponent,
    KlimModuleEditComponent
  ]
})
export class KlimModuleModule { }
