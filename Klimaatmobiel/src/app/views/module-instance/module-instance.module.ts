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

@NgModule({
  declarations: [
    ModuleInstanceViewComponent, 
    BestellingViewComponent, 
    BestellingListComponent, 
    ModuleInstanceListComponent, 
    InstanceDashboardComponent,
    TeamListComponent,
    TeamViewComponent,
    OrderLineViewComponent],

  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  
  exports: [
    ModuleInstanceViewComponent, 
    BestellingViewComponent, 
    BestellingListComponent, 
    ModuleInstanceListComponent,
    InstanceDashboardComponent,
    TeamListComponent,
    TeamViewComponent
  ]
})
export class ModuleInstanceModule { }
