import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleInstanceViewComponent } from './module-instance-view/module-instance-view.component';
import { BestellingViewComponent } from './bestelling-view/bestelling-view.component';
import { BestellingListComponent } from './bestelling-list/bestelling-list.component';
import { ModuleInstanceListComponent } from './module-instance-list/module-instance-list.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InstanceDashboardComponent } from './instance-dashboard/instance-dashboard.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { OrderLineViewComponent } from './order-line-view/order-line-view.component';
import { TeamNotitiesDialogComponent } from './team-notities-dialog/team-notities-dialog.component';
import { RapportEndOfModuleComponent } from './rapport-end-of-module/rapport-end-of-module.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { TeamBudgetDialogComponent } from './team-budget-dialog/team-budget-dialog.component';

@NgModule({
  declarations: [
    ModuleInstanceViewComponent,
    BestellingViewComponent,
    BestellingListComponent,
    ModuleInstanceListComponent,
    InstanceDashboardComponent,
    TeamListComponent,
    TeamViewComponent,
    OrderLineViewComponent,
    TeamNotitiesDialogComponent,
    RapportEndOfModuleComponent,
    ConfirmationDialogComponent,
    TeamBudgetDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [
    TeamNotitiesDialogComponent,
    
  ],
  entryComponents: [
    TeamNotitiesDialogComponent,
    TeamBudgetDialogComponent,
    BestellingListComponent, 
    ConfirmationDialogComponent
  ],
  exports: [
    ModuleInstanceViewComponent,
    BestellingViewComponent,
    BestellingListComponent,
    ModuleInstanceListComponent,
    InstanceDashboardComponent,
    TeamListComponent,
    TeamViewComponent,
    TeamNotitiesDialogComponent,
    TeamBudgetDialogComponent
  ]
})
export class ModuleInstanceModule { }
