import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { MaterialModule } from '../../material.module';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [DrawerComponent]
})
export class NavigationModule { }
