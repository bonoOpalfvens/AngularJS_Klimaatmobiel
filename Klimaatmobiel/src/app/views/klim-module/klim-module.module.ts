import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { ModuleInstanceCreateDialogComponent } from './module-instance-create-dialog/module-instance-create-dialog.component';
import { ViewsModule } from '../views.module';
import { ModuleInstanceModule } from '../module-instance/module-instance.module';
import { AddEigenschapComponent } from './add-eigenschap/add-eigenschap.component';
import { KlimModuleDetailsComponent } from './klim-module-details/klim-module-details.component';



@NgModule({
  declarations: [
    KlimModuleCreateComponent,
    KlimModuleListComponent,
    KlimModuleViewComponent,
    AddMateriaalComponent,
    ModuleFilterPipe,
    KlimModuleEditComponent,
    ModuleInstanceCreateDialogComponent,
    AddEigenschapComponent,
    KlimModuleDetailsComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ModuleInstanceModule,
    RouterModule
  ],
  entryComponents: [AddMateriaalComponent, ModuleInstanceCreateDialogComponent, AddEigenschapComponent],
  exports: [
    KlimModuleCreateComponent,
    KlimModuleListComponent,
    KlimModuleViewComponent,
    AddMateriaalComponent,
    KlimModuleEditComponent,
    KlimModuleDetailsComponent
  ]
})
export class KlimModuleModule { }
